import axios from '@/lib/axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const {
    body: { name, email, password },
  } = await req.json();
  try {
    const userData = await axios.post(
      '/auth/registration',
      {
        name: name,
        email: email,
        password: password,
      },
      {
        headers: {
          'User-Agent': req.headers.get('user-agent'),
        },
      },
    );
    return NextResponse.json(userData.data);
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.response.data.message,
        error: error.response.data.error,
        statusCode: error.response.data.statusCode,
      },
      { status: error.response.status },
    );
  }
}
