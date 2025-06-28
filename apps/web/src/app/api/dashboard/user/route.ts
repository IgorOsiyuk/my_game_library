import { getUserData } from '@/actions/getUserData';
import { updateUserData } from '@/actions/updateUserData';
import { NextRequest, NextResponse } from 'next/server';

// Обработчик GET-запросов для получения данных о панели управления
export async function GET() {
  try {
    const dashboardData = await getUserData();

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

// Обработчик PATCH-запросов для обновления данных пользователя
export async function PATCH(request: NextRequest) {
  try {
    // Извлекаем данные из тела запроса
    const userData = await request.json();

    const result = await updateUserData(userData);

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.response.data.message,
      error: error.response.data.error,
      statusCode: error.response.data.statusCode,
    });
  }
}
