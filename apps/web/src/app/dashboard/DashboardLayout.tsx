'use client';

import { logout } from '@/actions/logout';
import Box from '@/atomic/Box';
import Grid from '@/atomic/Grid';
import SideNav from '@/components/SideNav';
import { signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { css } from 'styled-components';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const axiosAuth = useAxiosAuth();
  // const session = useAutoLogout();

  const handleLogout = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const toastId = toast.loading('Выход из системы...');

    try {
      const response = await logout();

      toast.dismiss(toastId);

      if (!response.success) {
        // Обработка ошибки из action
        toast.error(response.error || 'Ошибка при выходе из системы');
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

  return (
    <Grid
      $columns="minmax(224px, 1.5fr) 10.5fr"
      $padding={'s_32'}
      $gap="s_32"
      $sx={css`
        min-height: 100dvh;
      `}
    >
      <SideNav signOutHandler={handleLogout} />
      <Box>{children}</Box>
      {/* <div className="col-start-3 -col-end-1 flex flex-col">
        <div className="px-4 py-8">
          <Breadcrumbs />
          {children}
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div> */}
    </Grid>
  );
}
