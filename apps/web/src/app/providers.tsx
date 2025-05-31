'use client';

import GlobalStyles from '@/styles/GlobalStyles';
import { SessionProvider } from 'next-auth/react';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { AppStoreProvider } from '../stores/providers/storeProvider';
import { theme } from '../styles/theme';

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <AppStoreProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SessionProvider>{children}</SessionProvider>
      </ThemeProvider>
    </AppStoreProvider>
  );
}
