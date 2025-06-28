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

    const { accessToken, accessTokenExpiresIn, refreshToken } = response.data;

    return {
      ...token,
      accessToken,
      accessTokenExpiresIn: Date.now() + accessTokenExpiresIn * 1000, // Конвертируем секунды в миллисекунды
      refreshToken,
    };
  } catch (error) {
    console.error('Ошибка обновления токена:', error);

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}
