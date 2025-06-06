'use client';

import { logout } from '@/actions/logout';
import SideNav from '@/components/SideNav';
import { signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';

export default function SideNavContainer() {
  const handleLogout = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const toastId = toast.loading('Выход из системы...');

    try {
      const response = await logout();

      toast.dismiss(toastId);

      if (!response.success) {
        // Обработка ошибки из action
        toast.error(response.error || 'Ошибка при выходе из системы');
        signOut({ callbackUrl: '/signin' });
        return;
      }

      // Успешный выход
      toast.success('Выход выполнен успешно');
      signOut({ callbackUrl: '/signout' });
    } catch (err: any) {
      toast.dismiss(toastId);
      toast.error(err.message || 'Непредвиденная ошибка при выходе');
    }
  };

  return <SideNav signOutHandler={handleLogout} />;
}
