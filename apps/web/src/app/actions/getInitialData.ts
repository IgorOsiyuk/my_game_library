'use server';

import { authOptions } from '@/api/auth/[...nextauth]/route';
import { Review } from '@/types/reviews';
import { Stats, StatsResponse } from '@/types/stats';
import axios from 'axios';
import { getServerSession, User } from 'next-auth';

interface InitialDataResponse {
  success: boolean;
  data?: {
    reviews: Review[];
    stats: Stats;
    user: User;
  };
  error?: string;
  statusCode?: number;
}

export async function getInitialData(): Promise<InitialDataResponse> {
  const session = await getServerSession(authOptions);
  try {
    if (!session) {
      return { success: false, error: 'Нет активной сессии', statusCode: 401 };
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const reviewsUrl = `${baseUrl}/reviews`;
    const statsUrl = `${baseUrl}/reviews/stats`;
    const userUrl = `${baseUrl}/user`;

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.user.accessToken}`,
    };

    // Выполняем все запросы параллельно
    const [reviewsResponse, statsResponse, userDataResponse] = await Promise.all([
      axios.get(reviewsUrl, { headers }),
      axios.get(statsUrl, { headers }),
      axios.get(userUrl, { headers }),
    ]);

    // Обрабатываем данные статистики
    const statsData = statsResponse.data as StatsResponse;
    const processedStats: Stats = {
      total: statsData.total,
      inProgress: statsData.totalByStatus['В процессе'],
      completed: statsData.totalByStatus['Пройдено'],
      abandoned: statsData.totalByStatus['Заброшено'],
      planned: statsData.totalByStatus['Запланировано'],
      favorites: statsData.totalByStatus.favorites,
    };

    return {
      success: true,
      data: {
        reviews: reviewsResponse.data,
        stats: processedStats,
        user: userDataResponse.data,
      },
    };
  } catch (error) {
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
      error: error instanceof Error ? error.message : 'Неизвестная ошибка при получении начальных данных',
    };
  }
}
