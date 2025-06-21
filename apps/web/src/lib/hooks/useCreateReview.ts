'use client';

import { createReview, FormValues } from '@/actions/createReview';
import { Review } from '@/stores/store';
import { signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { useAppData } from './useAppData';

// Функция для пересчета статистики
function calculateStats(reviews: Review[]) {
  const stats = {
    total: reviews.length,
    inProgress: 0,
    completed: 0,
    abandoned: 0,
    planned: 0,
    favorites: 0,
  };

  reviews.forEach((review) => {
    switch (review.status) {
      case 'В процессе':
        stats.inProgress++;
        break;
      case 'Пройдено':
        stats.completed++;
        break;
      case 'Заброшено':
        stats.abandoned++;
        break;
      case 'Запланировано':
        stats.planned++;
        break;
    }
    if (review.isFavorite) {
      stats.favorites++;
    }
  });

  return stats;
}

export function useCreateReview() {
  const { addReview, setStats, reviews } = useAppData();

  const createNewReview = async (formData: FormValues) => {
    const toastId = toast.loading('Добавление отзыва...');

    try {
      const response = await createReview(formData);
      toast.dismiss(toastId);

      if (!response.success) {
        toast.error(response.error || 'Ошибка при добавлении отзыва');

        if (response.statusCode === 401) {
          signOut({ callbackUrl: '/signin' });
        }

        return;
      }

      // Добавляем новый отзыв в store
      const newReview = response.data as Review;
      addReview(newReview);

      // Пересчитываем статистику с новым отзывом
      const updatedReviews = [newReview, ...reviews];
      const newStats = calculateStats(updatedReviews);
      setStats(newStats);

      toast.success(response.message || 'Отзыв успешно создан');
      return response;
    } catch (err: any) {
      toast.dismiss(toastId);
      const errorMessage = err.message || 'Непредвиденная ошибка при добавлении отзыва';
      toast.error(errorMessage);
    }
  };

  return createNewReview;
}
