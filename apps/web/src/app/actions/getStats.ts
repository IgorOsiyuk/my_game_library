'use server';

import { authOptions } from '@/api/auth/[...nextauth]/route';
import { Stats, StatsResponse } from '@/types/stats';
import axios from 'axios';
import { getServerSession } from 'next-auth';

export async function getStats() {
  const session = await getServerSession(authOptions);
  try {
    if (!session) {
      return { success: false, error: 'Нет активной сессии', statusCode: 401 };
    }

    const url = process.env.NEXT_PUBLIC_BASE_URL + '/reviews/stats';

    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    });
    const data = response.data as StatsResponse;
    const returnData: Stats = {
      total: data.total,
      inProgress: data.totalByStatus['В процессе'],
      completed: data.totalByStatus['Пройдено'],
      abandoned: data.totalByStatus['Заброшено'],
      planned: data.totalByStatus['Запланировано'],
      favorites: data.totalByStatus.favorites,
    };

    return { success: true, data: returnData };
  } catch (error) {
    // console.error('Ошибка при получении статистики:', error);

    // Проверяем, является ли ошибка ошибкой ответа от axios
    if (axios.isAxiosError(error)) {
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
      error: error instanceof Error ? error.message : 'Неизвестная ошибка при получении статистики',
    };
  }
}
