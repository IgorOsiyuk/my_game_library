'use client';

import { UpdateFormValues, updateReview } from '@/actions/updateReview';
import { signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';

// Простая функция для обновления отзыва без store
async function updateExistingReview(formData: UpdateFormValues, onSuccess?: () => void) {
  const toastId = toast.loading('Обновление отзыва...');

  try {
    const response = await updateReview(formData);
    toast.dismiss(toastId);

    if (!response.success) {
      toast.error(response.error || 'Ошибка при обновлении отзыва');

      if (response.statusCode === 401) {
        signOut({ callbackUrl: '/signin' });
      }

      return;
    }

    toast.success(response.message || 'Отзыв успешно обновлен');

    // Вызываем callback для дополнительных действий
    if (onSuccess) {
      onSuccess();
    }

    return response;
  } catch (err: any) {
    toast.dismiss(toastId);
    const errorMessage = err.message || 'Непредвиденная ошибка при обновлении отзыва';
    toast.error(errorMessage);
  }
}

export default updateExistingReview;
