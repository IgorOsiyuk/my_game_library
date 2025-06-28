'use server';

import { authOptions } from '@/api/auth/[...nextauth]/route';
import axios from '@/lib/axios';
import { isAxiosError } from 'axios';
import { getServerSession } from 'next-auth';

export type FormValues = {
  title: string;
  genres: string;
  platforms: string;
  releaseDate: string;
  status: string;
  difficulty: string;
  playTime: string;
  plot: string;
  gameScore: number;
  plotScore: number;
  artScore: number;
  gameplayScore: number;
  review: string;
  img?: File;
  imgUrl?: string;
};

export async function createReview(formData: FormValues) {
  const session = await getServerSession(authOptions);

  try {
    if (!session) {
      return { success: false, error: 'Нет активной сессии', statusCode: 401 };
    }

    const url = process.env.NEXT_PUBLIC_BASE_URL + '/reviews';

    // Создаем FormData для отправки файла и других данных
    const submitData = new FormData();

    // Добавляем все поля формы
    submitData.append('title', formData.title);
    submitData.append('genres', formData.genres);
    submitData.append('platforms', formData.platforms);
    submitData.append('releaseDate', formData.releaseDate);
    submitData.append('status', formData.status);
    submitData.append('playTime', formData.playTime);
    submitData.append('plot', formData.plot);
    submitData.append('gameScore', formData.gameScore.toString());
    submitData.append('plotScore', formData.plotScore.toString());
    submitData.append('artScore', formData.artScore.toString());
    submitData.append('gameplayScore', formData.gameplayScore.toString());
    submitData.append('difficulty', formData.difficulty);
    submitData.append('review', formData.review);
    // Добавляем файл изображения, если он есть
    if (formData.img) {
      submitData.append('img', formData.img);
    }

    if (formData.imgUrl) {
      submitData.append('imgUrl', formData.imgUrl);
    }

    const response = await axios.post(url, submitData, {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
        'Content-Type': formData.imgUrl ? 'application/json' : 'multipart/form-data',
      },
    });

    const data = response.data;
    return { success: true, data: data, message: 'Отзыв успешно создан' };
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error);
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
      error: error instanceof Error ? error.message : 'Неизвестная ошибка при создании отзыва',
    };
  }
}
