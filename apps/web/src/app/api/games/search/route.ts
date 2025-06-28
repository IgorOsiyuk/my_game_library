import { searchGames } from '@/actions/searchGames';
import { NextRequest, NextResponse } from 'next/server';

// Обработчик GET-запросов для поиска игр
export async function GET(request: NextRequest) {
  try {
    // Извлекаем query параметр из URL
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    if (!query) {
      return NextResponse.json({
        success: false,
        error: 'Параметр поиска обязателен',
        statusCode: 400,
      });
    }

    const result = await searchGames(query);

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.response?.data?.message || 'Ошибка при поиске игр',
      error: error.response?.data?.error || error.message,
      statusCode: error.response?.data?.statusCode || 500,
    });
  }
}
