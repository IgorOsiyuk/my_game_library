export enum GameStatus {
  IN_PROGRESS = 'В процессе',
  COMPLETED = 'Пройдено',
  ABANDONED = 'Заброшено',
  PLANNED = 'Запланировано',
}

export type Game = {
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
