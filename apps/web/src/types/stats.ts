export type Stats = {
  total: number;
  inProgress: number;
  completed: number;
  abandoned: number;
  planned: number;
  favorites: number;
};

export type StatsResponse = {
  total: number;
  totalByStatus: {
    'В процессе': number;
    Пройдено: number;
    Заброшено: number;
    Запланировано: number;
    favorites: number;
  };
};
