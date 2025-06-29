import { Providers } from '@/providers';
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import StyledComponentsRegistry from '../components/providers/StyledComponentsRegistry';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <>
              <Toaster />
              {children}
            </>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
