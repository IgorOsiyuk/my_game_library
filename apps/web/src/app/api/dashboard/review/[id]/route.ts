import { getReviewData } from '@/actions/getReviewData';
import { NextResponse } from 'next/server';

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const reviewData = await getReviewData(id);

    return NextResponse.json(reviewData);
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.response.data.message,
      error: error.response.data.error,
      statusCode: error.response.data.statusCode,
    });
  }
}
