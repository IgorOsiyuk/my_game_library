import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Подтверждение email',
  description: 'Подтверждение email',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
