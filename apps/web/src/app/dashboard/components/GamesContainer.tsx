'use client';

import FlexBox from '@/atomic/FlexBox';
import FilterOptions from '@/components/FilterOptions';
import GamesList from '@/components/GamesList';
import ViewOptions, { ViewType } from '@/components/ViewOptions';
import setToFavorite from '@/lib/api/setToFavorite';
import { useAppData } from '@/lib/hooks/useAppData';
import { useFilter } from '@/lib/hooks/useFilter';
import { useInititalData } from '@/lib/hooks/useInititalData';
import { useState } from 'react';

export default function GamesContainer() {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.CARD);
  const { stats, isLoading, error, toggleFavorite } = useAppData();
  const { selectedFilter, filteredReviews, setFilter } = useFilter();

  useInititalData();

  const toggleFavoriteHandler = (id: string) => {
    setToFavorite(id).then(() => {
      toggleFavorite(id);
    });
  };

  return (
    <FlexBox $direction="column" $gap="s_32">
      <FlexBox $justify="space-between" $width="100%">
        <FilterOptions
          isLoading={isLoading}
          selectedFilter={selectedFilter}
          onFilterChange={setFilter}
          reviewCounts={stats}
        />
        <ViewOptions currentView={currentView} onViewChange={setCurrentView} />
      </FlexBox>
      <GamesList
        isLoading={isLoading}
        error={error}
        games={filteredReviews.map((review) => ({
          ...review,
          img: review.img || '',
          genres: [],
          platform: '',
          developer: '',
        }))}
        currentView={currentView}
        setFavorite={toggleFavoriteHandler}
      />
    </FlexBox>
  );
}
