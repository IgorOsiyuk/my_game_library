import refreshAccessToken from '@/lib/api/refreshToken';
import axios from '@/lib/axios';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        password: {},
        email: {},
      },
      async authorize(credentials, req) {
        return await axios
          .post(
            '/auth/login',
            {
              email: credentials?.email,
              password: credentials?.password,
            },
            {
              headers: {
                'User-Agent': req.headers?.['user-agent'],
              },
            },
          )
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            return { error: JSON.stringify(err.response.data) };
          });
      },
    }),
    CredentialsProvider({
      id: 'verify-email',
      name: 'SingIn after verify',
      credentials: {
        verifyToken: {},
      },
      async authorize(credentials, req) {
        return await axios
          .get(`/auth/verify/${credentials?.verifyToken}`, {
            headers: {
              'User-Agent': req.headers?.['user-agent'],
            },
          })
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            return { error: JSON.stringify(err.response.data) };
          });
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60, // 7 дней в секундах
  },
  jwt: {
    maxAge: 7 * 24 * 60 * 60, // 7 дней в секундах
  },
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async signIn({ user }) {
      if (user?.error) {
        throw new Error(user?.error);
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.accessTokenExpiresIn = Date.now() + user.accessTokenExpiresIn * 1000; // Конвертируем секунды в миллисекунды
        token.refreshToken = user.refreshToken;
        return token;
      }

      // Проверяем, не истек ли access token
      if (Date.now() < token.accessTokenExpiresIn) return token;

      console.log('refresh token in jwt callback');
      const refreshedToken = await refreshAccessToken(token);

      if (refreshedToken.error) {
        return { ...token, error: 'RefreshAccessTokenError' };
      }

      return refreshedToken;
    },
    async session({ session, token }) {
      if (token.error === 'RefreshAccessTokenError') {
        return {
          ...session,
          error: 'RefreshAccessTokenError',
        };
      }

      session.user = token;
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/signout')) {
        return `${baseUrl}/signin`;
      }

      if (url.startsWith('/')) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
