'use server';

import { authOptions } from '@/api/auth/[...nextauth]/route';
import axios from '@/lib/axios';
import { isAxiosError } from 'axios';

import { getServerSession } from 'next-auth';

export async function setFavorite(id: string) {
  const session = await getServerSession(authOptions);
  try {
    if (!session) {
      return { success: false, error: 'Нет активной сессии', statusCode: 401 };
    }

    const url = process.env.NEXT_PUBLIC_BASE_URL + '/reviews/favorite/' + id;
    const response = await axios.post(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${session?.user.accessToken}`,
        },
      },
    );
    const data = response.data.message;
    return { success: true, data: data };
  } catch (error) {
    if (isAxiosError(error)) {
      const statusCode = error.response?.status;
      const errorMessage = error.response?.data?.message || error.message;
      return {
        success: false,
        error: errorMessage,
        statusCode,
      };
    }

    // Общая обработка других ошибок
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Неизвестная ошибка при добавлении в избранное',
    };
  }
}
