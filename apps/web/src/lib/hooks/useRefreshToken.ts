import { signOut, useSession } from 'next-auth/react';
import axios from '../axios';

const useRefreshToken = () => {
  const { data: session } = useSession();
  const refreshToken = async () => {
    const res = await axios.post(
      '/auth/refresh-token',
      {},
      {
        headers: {
          Authorization: `Bearer ${session?.user.refreshToken}`,
        },
      },
    );
    if (session) {
      session.user.accessToken = res.data.accessToken;
      session.user.refreshToken = res.data.refreshToken;
      session.user.accessTokenExpiresIn = Date.now() + res.data.accessTokenExpiresIn;
    } else {
      signOut({ callbackUrl: '/signout' });
    }
  };
  return refreshToken;
};

export default useRefreshToken;
