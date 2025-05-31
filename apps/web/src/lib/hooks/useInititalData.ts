'use client';

import { getInitialData } from '@/actions/getInitialData';
import { StatsResponse } from '@/actions/getStats';
import { Review } from '@/types/reviews';
import { signOut } from 'next-auth/react';
import { useEffect, useState, useTransition } from 'react';
import { toast } from 'react-hot-toast';

interface InitialData {
  reviews: Review[];
  stats: StatsResponse;
}

export function useInititalData() {
  const [initialData, setInitialData] = useState<InitialData>({
    reviews: [],
    stats: {
      total: 0,
      inProgress: 0,
      completed: 0,
      abandoned: 0,
      planned: 0,
      favorites: 0,
    },
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchReviews = async () => {
      const toastId = toast.loading('Загрузка отзывов...');
      try {
        const response = await getInitialData();

        toast.dismiss(toastId);

        if (!response.success) {
          if (response.statusCode === 401) {
            signOut({ callbackUrl: '/signin' });
          }
          setError(response.error || 'Ошибка при получении отзывов');
          toast.error(response.error || 'Ошибка при получении отзывов');
          setIsLoading(false);
          return;
        }
        // Используем startTransition для плавного обновления UI
        startTransition(() => {
          setInitialData(response.data as InitialData);
          setIsLoading(false);
        });
      } catch (err: any) {
        toast.dismiss(toastId);
        const errorMessage = err.message || 'Непредвиденная ошибка при загрузке отзывов';
        setError(errorMessage);
        toast.error(errorMessage);
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return {
    initialData,
    error,
    isLoading: isLoading || isPending,
  };
}
