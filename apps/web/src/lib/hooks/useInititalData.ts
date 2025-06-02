'use client';

import { GameStatus, Review } from '@/stores/store';
import axios from 'axios';
import { signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useAppData } from './useAppData';

export function useInititalData() {
  const { setReviews, setStats, setLoading, setError } = useAppData();

  useEffect(() => {
    const fetchReviews = async () => {
      const toastId = toast.loading('Загрузка отзывов...');
      try {
        const { data: response } = await axios.get(`/api/dashboard`);
        console.log(response);
        toast.dismiss(toastId);

        if (!response.success) {
          if (response.statusCode === 401) {
            signOut({ callbackUrl: '/signin' });
          }
          setError(response.error || 'Ошибка при получении отзывов');
          toast.error(response.error || 'Ошибка при получении отзывов');
          setLoading(false);
          return;
        }
        const reviews = response.data.reviews.map((review: Review) => ({
          ...review,
          status: review.status as GameStatus,
          img: review.img,
        }));
        console.log(reviews);
        setReviews(reviews);
        setStats(response.data.stats);
        setLoading(false);
      } catch (err: any) {
        toast.dismiss(toastId);
        const errorMessage = err.message || 'Непредвиденная ошибка при загрузке отзывов';
        setError(errorMessage);
        toast.error(errorMessage);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return;
}
