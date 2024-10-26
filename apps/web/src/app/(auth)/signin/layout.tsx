import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Вход в личный кабинет',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
