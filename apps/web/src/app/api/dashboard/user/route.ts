import { getUserData } from '@/actions/getUserData';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../../auth/[...nextauth]/route';

// Обработчик GET-запросов для получения данных о панели управления
export async function GET() {
  const session = await getServerSession(authOptions);

  try {
    const dashboardData = await getUserData(session);

    return NextResponse.json(dashboardData);
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.response.data.message,
      error: error.response.data.error,
      statusCode: error.response.data.statusCode,
    });
  }
}
