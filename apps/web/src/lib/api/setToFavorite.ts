'use client';

import { setFavorite } from '@/actions/setFavorite';
import { signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';

async function setToFavorite(id: string) {
  const toastId = toast.loading('Добавление в избранное...');

  try {
    const response = await setFavorite(id);
    toast.dismiss(toastId);
    toast.success(response.data);
    if (!response.success) {
      toast.error(response.error || 'Ошибка при добавлении в избранное');

      if (response.statusCode === 401) {
        signOut({ callbackUrl: '/signin' });
      }

      return;
    }
    return response;
  } catch (err: any) {
    toast.dismiss(toastId);
    const errorMessage = err.message || 'Непредвиденная ошибка при добавлении в избранное';
    toast.error(errorMessage);
  }
}

export default setToFavorite;
