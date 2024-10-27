import axios from '@/lib/axios';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        password: {},
        email: {},
      },
      async authorize(credentials, req) {
        const userData = await axios.post(
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
        );

        if (userData.data) {
          return userData.data;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60,
  },
  jwt: {
    maxAge: 7 * 24 * 60 * 60,
  },
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;

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
});

export { handler as GET, handler as POST };
