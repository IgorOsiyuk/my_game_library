import { getInitialData } from '@/actions/getInitialData';
import { NextResponse } from 'next/server';

// Обработчик GET-запросов для получения данных о панели управления
export async function GET() {
  try {
    const dashboardData = await getInitialData();

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
