'use server';

import axios from 'axios';
import { Session } from 'next-auth';

export async function getReviews(session: Session | null, status?: string, isFavorite?: boolean) {
  try {
    if (!session) {
      return { success: false, error: 'Нет активной сессии', statusCode: 401 };
    }

    // Формируем URL с query параметром status если он передан
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL + '/reviews';

    const response = await axios.get(`${baseUrl}?status=${status || ''}${isFavorite ? '&isFavorite=true' : ''}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    });

    return { success: true, data: response.data };
  } catch (error) {
    // console.error('Ошибка при получении отзывов:', error);

    // Проверяем, является ли ошибка ошибкой ответа от axios
    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status;
      const errorMessage = error.response?.data?.message || error.message;

      return {
        success: false,
        error: `Ошибка сервера (${statusCode}): ${errorMessage}`,
        statusCode,
      };
    }

    // Общая обработка других ошибок
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Неизвестная ошибка при получении отзывов',
    };
  }
}
