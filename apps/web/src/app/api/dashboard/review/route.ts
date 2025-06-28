import { createReview } from '@/actions/createReview';
import { updateReview } from '@/actions/updateReview';
import { NextRequest, NextResponse } from 'next/server';

// Обработчик POST-запросов для создания отзыва
export async function POST(request: NextRequest) {
  try {
    // Извлекаем данные из тела запроса
    const formData = await request.json();

    const result = await createReview(formData);

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.response?.data?.message || 'Ошибка при создании отзыва',
      error: error.response?.data?.error || error.message,
      statusCode: error.response?.data?.statusCode || 500,
    });
  }
}

// Обработчик PATCH-запросов для обновления отзыва
export async function PATCH(request: NextRequest) {
  try {
    // Извлекаем данные из тела запроса
    const formData = await request.json();

    const result = await updateReview(formData);

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.response?.data?.message || 'Ошибка при обновлении отзыва',
      error: error.response?.data?.error || error.message,
      statusCode: error.response?.data?.statusCode || 500,
    });
  }
}
