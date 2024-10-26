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
          Authorization: `Bearer ${session?.refreshToken}`,
        },
      },
    );
    if (session) {
      session.accessToken = res.data.accessToken;
      session.refreshToken = res.data.refreshToken;
    } else {
      signOut({ callbackUrl: '/signout' });
    }
  };
  return refreshToken;
};

export default useRefreshToken;
