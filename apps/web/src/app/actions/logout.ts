'use server';

import { authOptions } from '@/api/auth/[...nextauth]/route';
import axios from 'axios';
import { getServerSession } from 'next-auth';

export async function logout() {
  const session = await getServerSession(authOptions);

  const response = await axios.post(
    process.env.NEXT_PUBLIC_BASE_URL + '/auth/logout',
    {}, // пустое тело запроса
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    },
  );

  return response.data;
}
