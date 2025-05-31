'use client';

import { useAppData } from './useAppData';

export const useToggleFavorite = () => {
  const { toggleFavorite } = useAppData();

  return toggleFavorite;
};
