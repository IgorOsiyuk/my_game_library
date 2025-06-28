'use client';

import { GameStatus } from '@/stores/store';
import axios from 'axios';
import { signOut } from 'next-auth/react';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useAppData } from '../useAppData';

export function useGetReview() {
  const { setSelectedReview, setLoading, setError } = useAppData();

  const params = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      const toastId = toast.loading('Загрузка отзыва...');
      try {
        const { data: response } = await axios.get(`/api/dashboard/review/${params.id}`);
        toast.dismiss(toastId);

        if (!response.success) {
          if (response.statusCode === 401) {
            signOut({ callbackUrl: '/signin' });
          }
          setError(response.error || 'Ошибка при получении отзыва');
          toast.error(response.error || 'Ошибка при получении отзыва');
          setLoading(false);
          return;
        }
        const review = {
          ...response.data.review,
          status: response.data.review.status as GameStatus,
          img: response.data.review.img,
        };
        setSelectedReview(review);
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
