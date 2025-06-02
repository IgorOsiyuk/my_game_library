import { StatusEnum } from '@/components/StatusLabel';
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
