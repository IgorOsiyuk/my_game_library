'use server';

import { User } from '@/types/user';
import axios from 'axios';
import { Session } from 'next-auth';

interface UserDataResponse {
  success: boolean;
  data?: User;
  error?: string;
  statusCode?: number;
}

export async function getUserData(session: Session | null): Promise<UserDataResponse> {
  try {
    if (!session) {
      return { success: false, error: 'Нет активной сессии', statusCode: 401 };
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const userUrl = `${baseUrl}/user`;

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.user.accessToken}`,
    };

    const response = await axios.get(userUrl, { headers });

    return {
      success: true,
      data: {
        email: response.data.email,
        name: response.data.name,
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
      error: error instanceof Error ? error.message : 'Неизвестная ошибка при получении данных пользователя',
    };
  }
}
