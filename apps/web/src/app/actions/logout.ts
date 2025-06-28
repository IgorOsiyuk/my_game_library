'use server';

import { authOptions } from '@/api/auth/[...nextauth]/route';
import axios from 'axios';
import { getServerSession } from 'next-auth';

export async function logout() {
  const session = await getServerSession(authOptions);
  try {
    if (!session) {
      return { success: false, error: 'Нет активной сессии', statusCode: 401 };
    }

    const response = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + '/auth/logout',
      {}, // пустое тело запроса
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.user.accessToken}`,
        },
      },
    );

    return { success: true, data: response.data };
  } catch (error) {
    console.error('Ошибка при выходе из системы:', error);

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
      error: error instanceof Error ? error.message : 'Неизвестная ошибка при выходе из системы',
    };
  }
}
