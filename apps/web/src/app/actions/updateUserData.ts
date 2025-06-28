'use server';

import axios from 'axios';
import { Session } from 'next-auth';

interface UpdateUserDataRequest {
  name?: string;
  password?: string;
  confirmPassword?: string;
}

interface UpdateUserDataResponse {
  success: boolean;
  data?: {
    email: string;
    name: string;
  };
  message?: string;
  error?: string;
  statusCode?: number;
}

export async function updateUserData(
  session: Session | null,
  userData: UpdateUserDataRequest,
): Promise<UpdateUserDataResponse> {
  try {
    if (!session) {
      return { success: false, error: 'Нет активной сессии', statusCode: 401 };
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const userUrl = `${baseUrl}/user/update-user-data`;

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.user.accessToken}`,
    };

    // Подготавливаем данные для отправки
    const requestData: Partial<UpdateUserDataRequest> = {};

    if (userData.name) {
      requestData.name = userData.name;
    }

    if (userData.password && userData.confirmPassword) {
      requestData.password = userData.password;
      requestData.confirmPassword = userData.confirmPassword;
    }

    const response = await axios.patch(userUrl, requestData, { headers });

    return {
      success: true,
      data: {
        email: response.data.email,
        name: response.data.name,
      },
      message: 'Данные пользователя успешно обновлены',
    };
  } catch (error) {
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
      error: error instanceof Error ? error.message : 'Неизвестная ошибка при обновлении данных пользователя',
    };
  }
}
