import { getInitialData } from '@/actions/getInitialData';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';

// Обработчик GET-запросов для получения данных о панели управления
export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  try {
    const dashboardData = await getInitialData(session);

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
