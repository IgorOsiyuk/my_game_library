'use client';

import { createReview, FormValues } from '@/actions/createReview';
import { signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';

async function createNewReview(formData: FormValues, onSuccess?: () => void) {
  const toastId = toast.loading('Добавление отзыва...');

  try {
    const response = await createReview(formData);
    toast.dismiss(toastId);

    if (!response.success) {
      toast.error(response.error || 'Ошибка при добавлении отзыва');

      if (response.statusCode === 401) {
        signOut({ callbackUrl: '/signin' });
      }

      return;
    }

    toast.success(response.message || 'Отзыв успешно добавлен');
    return response;
  } catch (err: any) {
    toast.dismiss(toastId);
    const errorMessage = err.message || 'Непредвиденная ошибка при добавлении отзыва';
    toast.error(errorMessage);
  }
}

export default createNewReview;
