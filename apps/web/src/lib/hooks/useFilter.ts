'use client';

import { FilterType } from '@/stores/store';
import { useAppData } from './useAppData';

export function useFilter() {
  const { selectedFilter, setSelectedFilter, filteredReviews, reviews } = useAppData();

  const handleFilterChange = (filter: FilterType) => {
    setSelectedFilter(filter);
  };

  return {
    selectedFilter,
    filteredReviews,
    setFilter: handleFilterChange,
    totalReviews: reviews.length,
    filteredCount: filteredReviews.length,
  };
}
