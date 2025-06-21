'use client';

import { useAppStore } from '@/stores/providers/storeProvider';

export const useAppData = () => {
  const reviews = useAppStore((state) => state.reviews);
  const stats = useAppStore((state) => state.stats);
  const isLoading = useAppStore((state) => state.isLoading);
  const error = useAppStore((state) => state.error);
  const selectedReview = useAppStore((state) => state.selectedReview);

  // Actions
  const setReviews = useAppStore((state) => state.setReviews);
  const setSelectedReview = useAppStore((state) => state.setSelectedReview);
  const setStats = useAppStore((state) => state.setStats);
  const setLoading = useAppStore((state) => state.setLoading);
  const setError = useAppStore((state) => state.setError);
  const resetStore = useAppStore((state) => state.resetStore);
  const updateReview = useAppStore((state) => state.updateReview);
  const addReview = useAppStore((state) => state.addReview);
  const removeReview = useAppStore((state) => state.removeReview);
  const toggleFavorite = useAppStore((state) => state.toggleFavorite);
  const updateSelectedReview = useAppStore((state) => state.updateSelectedReview);

  return {
    // Data
    reviews,
    stats,
    selectedReview,
    isLoading,
    error,

    // Actions
    setReviews,
    setSelectedReview,
    setStats,
    setLoading,
    setError,
    resetStore,
    updateReview,
    addReview,
    removeReview,
    toggleFavorite,
    updateSelectedReview,
  };
};
