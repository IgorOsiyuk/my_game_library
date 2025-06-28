'use client';

import { UpdateUserDataRequest } from '@/types/user';
import axios from 'axios';
import { signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { useAppData } from './useAppData';

export function useUpdateUserData() {
  const { updateUser } = useAppData();

  const updateUserData = async (userData: UpdateUserDataRequest) => {
    const toastId = toast.loading('Обновление данных пользователя...');

    try {
      const { data: response } = await axios.patch('/api/dashboard/user', userData);
      toast.dismiss(toastId);

      if (!response.success) {
        toast.error(response.error || 'Ошибка при обновлении данных пользователя');

        if (response.statusCode === 401) {
          signOut({ callbackUrl: '/signin' });
        }

        return;
      }

      // Обновляем данные пользователя в store
      if (response.data) {
        updateUser({
          nickname: response.data.name,
        });
      }

      toast.success(response.message || 'Данные пользователя успешно обновлены');
      return response;
    } catch (err: any) {
      toast.dismiss(toastId);
      const errorMessage = err.message || 'Непредвиденная ошибка при обновлении данных пользователя';
      toast.error(errorMessage);
    }
  };

  return updateUserData;
}
