'use client';

import { getReviews } from '@/actions/getReviews';
import { FilterType } from '@/components/FilterOptions';
import { Game } from '@/types/game';
import { GameStatus } from '@/types/gameStatus';
import { signOut } from 'next-auth/react';
import { useEffect, useState, useTransition } from 'react';
import { toast } from 'react-hot-toast';

interface UseReviewsDataProps {
  filter?: FilterType;
}

// Маппинг FilterType в ReviewStatus для API
const mapFilterToStatus = (filter?: FilterType): GameStatus | undefined => {
  switch (filter) {
    case FilterType.COMPLETED:
      return GameStatus.COMPLETED;
    case FilterType.IN_PROGRESS:
      return GameStatus.IN_PROGRESS;
    case FilterType.ABANDONED:
      return GameStatus.ABANDONED;
    case FilterType.PLANNED:
      return GameStatus.PLANNED;
    case FilterType.ALL:
    case FilterType.FAVORITE:
    default:
      return undefined; // Для ALL и FAVORITE не передаем статус в API
  }
};

export function useReviewsData({ filter }: UseReviewsDataProps = {}) {
  const [reviews, setReviews] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchReviews = async () => {
      const toastId = toast.loading('Загрузка отзывов...');
      const isFavorite = filter === FilterType.FAVORITE;
      try {
        const status = mapFilterToStatus(filter);
        const response = await getReviews(status as string, isFavorite);

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
          setReviews(response.data);
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
  }, [filter]);

  return {
    reviews,
    error,
    isLoading: isLoading || isPending,
  };
}
