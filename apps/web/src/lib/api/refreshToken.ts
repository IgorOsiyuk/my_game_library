import { JWT } from 'next-auth/jwt';
import axios from '../axios';

export default async function refreshAccessToken(token: JWT, retryCount = 0) {
  console.log('refresh token in refreshToken function');
  try {
    const response = await axios.post(
      '/auth/refresh-token',
      {},
      {
        headers: {
          Authorization: `Bearer ${token.refreshToken}`,
        },
      },
    );
    if (response.status === 401) {
      throw new Error(response.data?.message || 'Ошибка обновления токена');
    }
    return {
      ...token,
      accessToken: response.data.accessToken,
      accessTokenExpiresIn: Date.now() + response.data.accessTokenExpiresIn,
      refreshToken: response.data.refreshToken,
    };
  } catch (error) {
    console.error('Ошибка обновления токена:', error);

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}
