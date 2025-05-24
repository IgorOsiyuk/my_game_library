'use client';

import { getStats, StatsResponse } from '@/actions/getStats';
import { signOut } from 'next-auth/react';
import { useEffect, useState, useTransition } from 'react';
import { toast } from 'react-hot-toast';

export function useGetStats() {
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchStats = async () => {
      const toastId = toast.loading('Загрузка статистики...');

      try {
        const response = await getStats();

        toast.dismiss(toastId);

        if (!response.success) {
          if (response.statusCode === 401) {
            signOut({ callbackUrl: '/signin' });
          }
          setError(response.error || 'Ошибка при получении статистики');
          setIsLoading(false);
          return;
        }

        // Используем startTransition для плавного обновления UI
        startTransition(() => {
          setStats(response.data || null);
          setIsLoading(false);
        });
      } catch (err: any) {
        toast.dismiss(toastId);
        const errorMessage = err.message || 'Непредвиденная ошибка при загрузке статистики';
        setError(errorMessage);
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  return {
    stats,
    isLoading: isLoading || isPending || error !== null,
  };
}
