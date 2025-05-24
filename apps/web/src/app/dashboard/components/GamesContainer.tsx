'use client';

import FlexBox from '@/atomic/FlexBox';
import FilterOptions, { FilterType } from '@/components/FilterOptions';
import GamesList from '@/components/GamesList';
import ViewOptions, { ViewType } from '@/components/ViewOptions';
import { useGetStats } from '@/lib/hooks/useGetStats';
import { useReviewsData } from '@/lib/hooks/useReviewsData';
import { useState } from 'react';

export default function GamesContainer() {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.CARD);
  const [selectedFilter, setSelectedFilter] = useState<FilterType>(FilterType.ALL);
  const { reviews, error, isLoading } = useReviewsData({ filter: selectedFilter });
  const { stats, isLoading: statsIsLoading } = useGetStats();
  return (
    <FlexBox $direction="column" $gap="s_32">
      <FlexBox $justify="space-between" $width="100%">
        <FilterOptions
          isLoading={statsIsLoading}
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
          reviewCounts={stats}
        />
        <ViewOptions currentView={currentView} onViewChange={setCurrentView} />
      </FlexBox>
      <GamesList isLoading={isLoading} error={error} games={reviews} currentView={currentView} />
    </FlexBox>
  );
}
