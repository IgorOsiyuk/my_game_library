'use client';

import { useAppStore } from '@/stores/providers/storeProvider';

export const useAppData = () => {
  const reviews = useAppStore((state) => state.reviews);
  const filteredReviews = useAppStore((state) => state.filteredReviews);
  const selectedFilter = useAppStore((state) => state.selectedFilter);
  const stats = useAppStore((state) => state.stats);
  const user = useAppStore((state) => state.user);
  const isLoading = useAppStore((state) => state.isLoading);
  const error = useAppStore((state) => state.error);
  const selectedReview = useAppStore((state) => state.selectedReview);

  // Actions
  const setReviews = useAppStore((state) => state.setReviews);
  const setSelectedReview = useAppStore((state) => state.setSelectedReview);
  const setStats = useAppStore((state) => state.setStats);
  const setUser = useAppStore((state) => state.setUser);
  const updateUser = useAppStore((state) => state.updateUser);
  const clearUser = useAppStore((state) => state.clearUser);
  const setLoading = useAppStore((state) => state.setLoading);
  const setError = useAppStore((state) => state.setError);
  const resetStore = useAppStore((state) => state.resetStore);
  const updateReview = useAppStore((state) => state.updateReview);
  const addReview = useAppStore((state) => state.addReview);
  const removeReview = useAppStore((state) => state.removeReview);
  const toggleFavorite = useAppStore((state) => state.toggleFavorite);
  const setSelectedFilter = useAppStore((state) => state.setSelectedFilter);
  const applyFilter = useAppStore((state) => state.applyFilter);
  const updateSelectedReview = useAppStore((state) => state.updateSelectedReview);

  return {
    // Data
    reviews,
    filteredReviews,
    selectedFilter,
    selectedReview,
    stats,
    user,
    isLoading,
    error,

    // Actions
    setReviews,
    setSelectedReview,
    setStats,
    setUser,
    updateUser,
    clearUser,
    setLoading,
    setError,
    resetStore,
    updateReview,
    addReview,
    removeReview,
    toggleFavorite,
    setSelectedFilter,
    applyFilter,
    updateSelectedReview,
  };
};
