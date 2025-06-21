'use server';

import { authOptions } from '@/api/auth/[...nextauth]/route';
import axios from '@/lib/axios';
import { isAxiosError } from 'axios';
import { getServerSession } from 'next-auth';

export type GameSearchResult = {
  id: string;
  title: string;
  developer?: string;
  genre?: string;
  platform?: string;
  releaseYear?: string;
  image?: string;
};

export async function searchGames(searchQuery: string) {
  const session = await getServerSession(authOptions);

  try {
    if (!session) {
      return { success: false, error: 'Нет активной сессии', statusCode: 401 };
    }

    if (!searchQuery || searchQuery.trim().length < 2) {
      return { success: true, data: [], message: 'Поисковой запрос слишком короткий' };
    }

    const url = process.env.NEXT_PUBLIC_BASE_URL + '/games/search';

    const response = await axios.post(
      url,
      { search: searchQuery.trim() },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const games = response.data;
    return { success: true, data: games, message: 'Поиск выполнен успешно' };
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error);
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
      error: error instanceof Error ? error.message : 'Неизвестная ошибка при поиске игр',
    };
  }
}
