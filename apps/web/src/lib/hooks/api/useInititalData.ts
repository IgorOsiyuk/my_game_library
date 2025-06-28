'use client';

import { GameStatus, Review } from '@/stores/store';
import axios from 'axios';
import { signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useAppData } from '../useAppData';

export function useInititalData() {
  const { setReviews, setStats, setUser, setLoading, setError } = useAppData();

  useEffect(() => {
    const fetchInitialData = async () => {
      const toastId = toast.loading('Загрузка данных...');
      try {
        const { data: response } = await axios.get(`/api/dashboard`);
        console.log('response dashboard', response);
        toast.dismiss(toastId);

        if (!response.success) {
          if (response.statusCode === 401) {
            signOut({ callbackUrl: '/signin' });
          }
          setError(response.error || 'Ошибка при получении данных');
          toast.error(response.error || 'Ошибка при получении данных');
          setLoading(false);
          return;
        }

        // Обрабатываем отзывы
        const reviews = response.data.reviews.map((review: Review) => ({
          ...review,
          status: review.status as GameStatus,
          img: review.img,
        }));
        setReviews(reviews);

        // Устанавливаем статистику
        setStats(response.data.stats);
        setUser({
          email: response.data.user.email,
          nickname: response.data.user.name, // name используется как nickname
          avatar: '', // Пока пустой, можно добавить позже
        });

        setLoading(false);
      } catch (err: any) {
        toast.dismiss(toastId);
        const errorMessage = err.message || 'Непредвиденная ошибка при загрузке данных';
        setError(errorMessage);
        toast.error(errorMessage);
        setLoading(false);
      }
    };

    fetchInitialData();
  }, [setReviews, setStats, setUser, setLoading, setError]);

  return;
}
