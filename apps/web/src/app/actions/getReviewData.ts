'use server';

import { authOptions } from '@/api/auth/[...nextauth]/route';
import { Review } from '@/types/reviews';
import axios from 'axios';
import { getServerSession } from 'next-auth';

interface ReviewDataResponse {
  success: boolean;
  data?: {
    review: Review;
  };
  error?: string;
  statusCode?: number;
}

export async function getReviewData(id: string): Promise<ReviewDataResponse> {
  const session = await getServerSession(authOptions);
  try {
    if (!session) {
      return { success: false, error: 'Нет активной сессии', statusCode: 401 };
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const reviewsUrl = `${baseUrl}/reviews/${id}`;

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.user.accessToken}`,
    };

    // Выполняем оба запроса параллельно
    const reviewResponse = await axios.get(reviewsUrl, { headers });

    // Обрабатываем данные статистики
    const reviewData = reviewResponse.data as Review;

    return {
      success: true,
      data: {
        review: reviewData,
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
