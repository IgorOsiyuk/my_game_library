'use client';

import { FilterType } from '@/stores/store';
import { useAppData } from './useAppData';

export function useFilter() {
  const { selectedFilter, setSelectedFilter, filteredReviews, reviews } = useAppData();

  const handleFilterChange = (filter: FilterType) => {
    console.log('Changing filter from', selectedFilter, 'to', filter);
    setSelectedFilter(filter);
    console.log('Reviews after filter:', filteredReviews.length, 'of', reviews.length);
  };

  return {
    selectedFilter,
    filteredReviews,
    setFilter: handleFilterChange,
    totalReviews: reviews.length,
    filteredCount: filteredReviews.length,
  };
}
