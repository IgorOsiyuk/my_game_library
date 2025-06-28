'use client';

import { FormValues } from '@/actions/createReview';
import { Review } from '@/stores/store';
import axios from 'axios';
import { signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { calculateStats } from '../../utils';
import { useAppData } from '../useAppData';

export function useCreateReview() {
  const { addReview, setStats, reviews } = useAppData();

  const createNewReview = async (formData: FormValues) => {
    const toastId = toast.loading('Добавление отзыва...');

    try {
      const { data: response } = await axios.post('/api/dashboard/review', formData);
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
