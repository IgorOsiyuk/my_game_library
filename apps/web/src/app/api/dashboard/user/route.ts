import { getUserData } from '@/actions/getUserData';
import { updateUserData } from '@/actions/updateUserData';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
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

// Обработчик PATCH-запросов для обновления данных пользователя
export async function PATCH(request: NextRequest) {
  const session = await getServerSession(authOptions);

  try {
    // Извлекаем данные из тела запроса
    const userData = await request.json();

    const result = await updateUserData(session, userData);

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
