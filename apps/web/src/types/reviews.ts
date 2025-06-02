export type Review = {
  id: string;
  title: string;
  img: string;
  status?: string;
  playTime: string;
  rating: string;
  score: number;
  plotScore: number;
  artScore: number;
  gameplayScore: number;
  difficulty: string;
  trophies: number;
  review: string;
  isFavorite: boolean;
  createdAt?: string;
  updatedAt?: string;
};
