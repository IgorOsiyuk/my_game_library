'use client';

import axios from 'axios';
import { signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useAppData } from './useAppData';

export function useGetUserData() {
  const { setUser, setLoading, setError, user } = useAppData();

  useEffect(() => {
    if (user.nickname) {
      return;
    }
    const fetchUserData = async () => {
      const toastId = toast.loading('Загрузка данных пользователя...');
      try {
        const { data: response } = await axios.get('/api/dashboard/user');
        toast.dismiss(toastId);

        if (!response.success) {
          if (response.statusCode === 401) {
            signOut({ callbackUrl: '/signin' });
          }
          setError(response.error || 'Ошибка при получении данных пользователя');
          toast.error(response.error || 'Ошибка при получении данных пользователя');
          setLoading(false);
          return;
        }

        // Обновляем данные пользователя в store
        if (response.data) {
          setUser({
            email: response.data.email,
            nickname: response.data.name, // name используется как nickname
            avatar: '', // Пока пустой, можно добавить позже
          });
        }

        setLoading(false);
      } catch (err: any) {
        toast.dismiss(toastId);
        const errorMessage = err.message || 'Непредвиденная ошибка при загрузке данных пользователя';
        setError(errorMessage);
        toast.error(errorMessage);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  return;
}
