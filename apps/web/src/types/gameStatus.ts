import { StatusEnum } from '@/components/StatusLabel';

export enum GameStatus {
  IN_PROGRESS = 'В процессе',
  COMPLETED = 'Пройдено',
  ABANDONED = 'Заброшено',
  PLANNED = 'Запланировано',
}

export const GameStatusVariantMap = {
  [GameStatus.COMPLETED]: StatusEnum.SUCCESS,
  [GameStatus.IN_PROGRESS]: StatusEnum.INFO,
  [GameStatus.ABANDONED]: StatusEnum.ERROR,
  [GameStatus.PLANNED]: StatusEnum.WARNING,
};

export interface Stats {
  total: number;
  inProgress: number;
  completed: number;
  abandoned: number;
  planned: number;
  favorites: number;
}
