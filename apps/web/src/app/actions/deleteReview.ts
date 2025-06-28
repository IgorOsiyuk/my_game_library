'use server';

import { authOptions } from '@/api/auth/[...nextauth]/route';
import axios from '@/lib/axios';
import { isAxiosError } from 'axios';

import { getServerSession } from 'next-auth';

export async function deleteReview(id: string) {
  const session = await getServerSession(authOptions);
  try {
    if (!session) {
      return { success: false, error: 'Нет активной сессии', statusCode: 401 };
    }

    const url = process.env.NEXT_PUBLIC_BASE_URL + '/reviews/' + id;
    await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    });

    return { success: true, message: 'Отзыв успешно удален' };
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
      error: error instanceof Error ? error.message : 'Неизвестная ошибка при удалении отзыва',
    };
  }
}
