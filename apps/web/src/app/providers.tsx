'use client';

import GlobalStyles from '@/styles/GlobalStyles';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <SessionProvider>{children}</SessionProvider>
       */}
      {children}
    </ThemeProvider>
  );
}
