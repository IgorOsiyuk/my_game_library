'use client';

import { UpdateFormValues, updateReview } from '@/actions/updateReview';
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

export function useUpdateReview() {
  const { updateReview: updateReviewInStore, setStats, reviews, updateSelectedReview } = useAppData();

  const updateExistingReview = async (formData: UpdateFormValues) => {
    const toastId = toast.loading('Обновление отзыва...');

    try {
      const response = await updateReview(formData);
      toast.dismiss(toastId);

      if (!response.success) {
        toast.error(response.error || 'Ошибка при обновлении отзыва');

        if (response.statusCode === 401) {
          signOut({ callbackUrl: '/signin' });
        }

        return;
      }

      // Обновляем отзыв в store
      console.log(response.data);
      const updatedReview = response.data as Review;
      updateReviewInStore(formData.id, updatedReview);
      updateSelectedReview(updatedReview);

      // Пересчитываем статистику с обновленными данными
      const updatedReviews = reviews.map((review) => (review.id === formData.id ? updatedReview : review));
      const newStats = calculateStats(updatedReviews);
      setStats(newStats);

      toast.success(response.message || 'Отзыв успешно обновлен');
      return response;
    } catch (err: any) {
      toast.dismiss(toastId);
      const errorMessage = err.message || 'Непредвиденная ошибка при обновлении отзыва';
      toast.error(errorMessage);
    }
  };

  return updateExistingReview;
}
