import { GameStatus } from './gameStatus';

export type Review = {
  id: string;
  title: string;
  playTime: string;
  genres: string[];
  rating: string;
  status?: GameStatus;
  image: string;
  platform: string;
  developer: string;
  isFavorite: boolean;
};
