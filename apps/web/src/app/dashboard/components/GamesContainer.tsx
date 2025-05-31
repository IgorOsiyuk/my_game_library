'use client';

import setToFavorite from '@/api/setToFavorite';
import FlexBox from '@/atomic/FlexBox';
import FilterOptions, { FilterType } from '@/components/FilterOptions';
import GamesList from '@/components/GamesList';
import ViewOptions, { ViewType } from '@/components/ViewOptions';
import { useInititalData } from '@/lib/hooks/useInititalData';
import { useState } from 'react';

export default function GamesContainer() {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.CARD);
  const [selectedFilter, setSelectedFilter] = useState<FilterType>(FilterType.ALL);
  const { initialData, error, isLoading } = useInititalData();

  return (
    <FlexBox $direction="column" $gap="s_32">
      <FlexBox $justify="space-between" $width="100%">
        <FilterOptions
          isLoading={isLoading}
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
          reviewCounts={initialData?.stats}
        />
        <ViewOptions currentView={currentView} onViewChange={setCurrentView} />
      </FlexBox>
      <GamesList
        isLoading={isLoading}
        error={error}
        games={initialData?.reviews}
        currentView={currentView}
        setFavorite={setToFavorite}
      />
    </FlexBox>
  );
}
