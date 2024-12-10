import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collage',
  description: 'Generated your collage',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
