import { getReviewData } from '@/actions/getReviewData';
import { authOptions } from '@/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  try {
    const reviewData = await getReviewData(session, id);

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
