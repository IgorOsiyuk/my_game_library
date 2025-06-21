import { StatusEnum } from '@/components/StatusLabel';
import { Review } from '@/stores/store';
import { GameStatus } from '@/types/game';

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
