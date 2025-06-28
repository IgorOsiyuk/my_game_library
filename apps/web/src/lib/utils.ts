import { Review } from '@/stores/store';
import { GameStatus } from '@/types/game';
import { StatusEnum } from '@/ui/StatusLabel';

import Rating0Img from '@/images/rating-0.png';
import Rating1Img from '@/images/rating-1.png';
import Rating2Img from '@/images/rating-2.png';
import Rating3Img from '@/images/rating-3.png';
import Rating4Img from '@/images/rating-4.png';
import { StaticImageData } from 'next/image';

export const validateEmail = (value: string) => {
  if (value.length === 0) {
    return true;
  }
  return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
};

export const GameStatusVariantMap = {
  [GameStatus.COMPLETED]: StatusEnum.SUCCESS,
  [GameStatus.IN_PROGRESS]: StatusEnum.INFO,
  [GameStatus.ABANDONED]: StatusEnum.ERROR,
  [GameStatus.PLANNED]: StatusEnum.WARNING,
};

export function calculateStats(reviews: Review[]) {
  const stats = {
    total: reviews.length,
    inProgress: 0,
    completed: 0,
    abandoned: 0,
    planned: 0,
    favorites: 0,
  };

  reviews.forEach((review) => {
    switch (review.status) {
      case 'В процессе':
        stats.inProgress++;
        break;
      case 'Пройдено':
        stats.completed++;
        break;
      case 'Заброшено':
        stats.abandoned++;
        break;
      case 'Запланировано':
        stats.planned++;
        break;
    }
    if (review.isFavorite) {
      stats.favorites++;
    }
  });

  return stats;
}

export const getEmojiForValue = (value: number): StaticImageData => {
  if (value <= 1) return Rating0Img;
  if (value <= 2) return Rating1Img;
  if (value <= 3) return Rating2Img;
  if (value <= 4) return Rating3Img;
  return Rating4Img;
};
