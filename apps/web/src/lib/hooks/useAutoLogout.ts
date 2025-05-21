import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function useAutoLogout() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user.error === 'RefreshAccessTokenError') {
      // Сессия невалидна, выполняем автоматический выход
      signOut({ callbackUrl: '/signin' });
    }
  }, [session]);

  return session;
}
