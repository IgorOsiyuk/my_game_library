'use server';

import { Review } from '@/types/reviews';
import axios from 'axios';
import { Session } from 'next-auth';
import { ResponseData, StatsResponse } from './getStats';

interface InitialDataResponse {
  success: boolean;
  data?: {
    reviews: Review[];
    stats: StatsResponse;
  };
  error?: string;
  statusCode?: number;
}

export async function getInitialData(session: Session | null): Promise<InitialDataResponse> {
  try {
    if (!session) {
      return { success: false, error: 'Нет активной сессии', statusCode: 401 };
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const reviewsUrl = `${baseUrl}/reviews`;
    const statsUrl = `${baseUrl}/reviews/stats`;

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.user.accessToken}`,
    };

    // Выполняем оба запроса параллельно
    const [reviewsResponse, statsResponse] = await Promise.all([
      axios.get(reviewsUrl, { headers }),
      axios.get(statsUrl, { headers }),
    ]);

    // Обрабатываем данные статистики
    const statsData = statsResponse.data as ResponseData;
    const processedStats: StatsResponse = {
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
      },
    };
  } catch (error) {
    // console.error('Ошибка при получении начальных данных:', error);

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
      error: error instanceof Error ? error.message : 'Неизвестная ошибка при получении начальных данных',
    };
  }
}
