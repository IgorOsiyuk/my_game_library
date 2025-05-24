'use client';

import FlexBox from '@/atomic/FlexBox';
import FilterOptions, { FilterType } from '@/components/FilterOptions';
import ViewOptions, { ViewType } from '@/components/ViewOptions';
import { useReviewsData } from '@/lib/hooks/useReviewsData';
import { useState } from 'react';
import GamesList from './GamesList';

export default function GamesContainer() {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.CARD);
  const [selectedFilter, setSelectedFilter] = useState<FilterType>(FilterType.ALL);
  const { reviews, error, isLoading } = useReviewsData({ filter: selectedFilter });
  return (
    <FlexBox $direction="column" $gap="s_32">
      <FlexBox $justify="space-between">
        <FilterOptions
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
          reviewCounts={{
            total: reviews.length,
            completed: 1,
            inProgress: 1,
            abandoned: 1,
            planned: 1,
            favorites: 1,
          }}
        />
        <ViewOptions currentView={currentView} onViewChange={setCurrentView} />
      </FlexBox>
      <GamesList isLoading={isLoading} error={error} games={reviews} currentView={currentView} />
    </FlexBox>
  );
}
