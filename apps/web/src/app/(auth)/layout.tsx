import AuthNav from '@/components/AuthNav';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6">
        <AuthNav />
        {children}
      </div>
    </div>
  );
}
