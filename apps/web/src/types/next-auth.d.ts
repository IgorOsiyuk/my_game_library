declare module 'next-auth' {
  interface Session {
    accessToken: string;
    accessTokenExpiresIn: number;
    refreshToken: string;
    error?: string;
  }
  interface User {
    accessToken: string;
    accessTokenExpiresIn: number;
    refreshToken: string;
    error?: string;
  }
}

import 'next-auth/jwt';
declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
    accessTokenExpiresIn: number;
    refreshToken: string;
    error?: string;
  }
}
