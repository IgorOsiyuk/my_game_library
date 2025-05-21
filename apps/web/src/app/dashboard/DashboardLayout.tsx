'use client';

import { logout } from '@/actions/logout';
import Box from '@/atomic/Box';
import Grid from '@/atomic/Grid';
import SideNav from '@/components/SideNav';
import { signOut } from 'next-auth/react';
import { css } from 'styled-components';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const axiosAuth = useAxiosAuth();
  // const session = useAutoLogout();
  return (
    <Grid
      $columns="minmax(224px, 1.5fr) 10.5fr"
      $padding={'s_32'}
      $gap="s_32"
      $sx={css`
        min-height: 100dvh;
      `}
    >
      <SideNav
        signOutHandler={(e) => {
          e.preventDefault();
          // axiosAuth.post('/auth/logout').then(() => signOut({ callbackUrl: '/signout' }));
          logout().then(() => signOut({ callbackUrl: '/signout' }));
        }}
      />
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
