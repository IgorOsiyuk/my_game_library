'use server';

import { authOptions } from '@/api/auth/[...nextauth]/route';
import axios from '@/lib/axios';
import { isAxiosError } from 'axios';
import { getServerSession } from 'next-auth';

export type UpdateFormValues = {
  id: string;
  gameTitle: string;
  developer: string;
  genre: string;
  platform: string;
  releaseYear: string;
  gameStatus: string;
  difficulty: string;
  plotDescription: string;
  gameScore: number;
  plotScore: number;
  artScore: number;
  gameplayScore: number;
  reviewText: string;
  gameImage?: File;
  imgUrl?: string;
};

export async function updateReview(formData: UpdateFormValues) {
  const session = await getServerSession(authOptions);

  try {
    if (!session) {
      return { success: false, error: 'Нет активной сессии', statusCode: 401 };
    }
    console.log(formData.id);
    const url = process.env.NEXT_PUBLIC_BASE_URL + `/reviews/${formData.id}`;

    // Создаем FormData для отправки файла и других данных
    const submitData = new FormData();

    // Добавляем все поля формы
    submitData.append('title', formData.gameTitle);
    // submitData.append('developer', formData.developer);
    // submitData.append('genre', formData.genre);
    // submitData.append('platform', formData.platform);
    // submitData.append('releaseYear', formData.releaseYear);
    submitData.append('status', formData.gameStatus);
    submitData.append('difficulty', formData.difficulty);
    // submitData.append('plotDescription', formData.plotDescription);

    submitData.append('score', formData.gameScore.toString());
    submitData.append('plotScore', formData.plotScore.toString());
    submitData.append('artScore', formData.artScore.toString());
    submitData.append('gameplayScore', formData.gameplayScore.toString());

    submitData.append('review', formData.reviewText);

    submitData.append('playTime', '222ч');
    submitData.append('rating', '22');
    submitData.append('trophies', '25');

    // Добавляем файл изображения, если он есть
    if (formData.gameImage) {
      submitData.append('img', formData.gameImage);
    }
    // if (formData.imgUrl) {
    //   submitData.append('img', formData.imgUrl);
    // }
    const response = await axios.patch(url, submitData, {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    const data = response.data;
    return { success: true, data: data, message: 'Отзыв успешно обновлен' };
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
      error: error instanceof Error ? error.message : 'Неизвестная ошибка при обновлении отзыва',
    };
  }
}
