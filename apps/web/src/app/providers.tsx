'use client';

import { NextUIProvider } from '@nextui-org/system';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import * as React from 'react';

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <SessionProvider>{children}</SessionProvider>
    </NextUIProvider>
  );
}
