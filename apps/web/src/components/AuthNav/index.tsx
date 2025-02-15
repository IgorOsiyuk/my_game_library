'use client';

import { usePathname } from 'next/navigation';

export default function AuthNav() {
  const pathname = usePathname();

  return (
    <div className="mt-6 flex w-full items-center justify-center">
      <a
        href="/signin"
        color="foreground"
        className={`block w-1/2 border-b pb-4 text-center font-medium capitalize ${pathname === '/signin' ? 'border-blue-500' : ''}`}
      >
        Sign in
      </a>

      <a
        href="/signup"
        color="foreground"
        className={`block w-1/2 border-b-2 pb-4 text-center font-medium capitalize ${pathname === '/signup' ? 'border-blue-500' : ''}`}
      >
        Sign up
      </a>
    </div>
  );
}
