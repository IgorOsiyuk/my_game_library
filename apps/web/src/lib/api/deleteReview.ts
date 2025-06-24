'use client';

import { deleteReview } from '@/actions/deleteReview';
import { signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';

async function deleteReviewClient(id: string) {
  const toastId = toast.loading('Удаление отзыва...');

  try {
    const response = await deleteReview(id);
    toast.dismiss(toastId);

    if (!response.success) {
      toast.error(response.error || 'Ошибка при удалении отзыва');

      if (response.statusCode === 401) {
        signOut({ callbackUrl: '/signin' });
      }

      return response;
    }

    toast.success(response.message || 'Отзыв успешно удален');
    return response;
  } catch (err: any) {
    toast.dismiss(toastId);
    const errorMessage = err.message || 'Непредвиденная ошибка при удалении отзыва';
    toast.error(errorMessage);
    return { success: false, error: errorMessage };
  }
}

export default deleteReviewClient;
