'use client';

import Box from '@/atomic/Box';
import Grid from '@/atomic/Grid';
import { AppStoreProvider } from '@/stores/providers/storeProvider';
import { css } from 'styled-components';
import SideNavContainer from './components/SideNavContainer';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppStoreProvider>
      <Grid
        $columns="minmax(224px, 1.5fr) 10.5fr"
        $padding={'s_32'}
        $gap="s_32"
        $sx={css`
          min-height: 100dvh;
        `}
      >
        <SideNavContainer />
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
    </AppStoreProvider>
  );
}
