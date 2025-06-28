'use client';

import { UpdateFormValues, updateReview } from '@/actions/updateReview';
import { Review } from '@/stores/store';
import { signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { calculateStats } from '../../utils';
import { useAppData } from '../useAppData';

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
