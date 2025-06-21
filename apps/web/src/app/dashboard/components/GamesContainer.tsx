'use client';

import FlexBox from '@/atomic/FlexBox';
import FilterOptions, { FilterType } from '@/components/FilterOptions';
import GamesList from '@/components/GamesList';
import ViewOptions, { ViewType } from '@/components/ViewOptions';
import setToFavorite from '@/lib/api/setToFavorite';
import { useAppData } from '@/lib/hooks/useAppData';
import { useInititalData } from '@/lib/hooks/useInititalData';
import { useState } from 'react';

export default function GamesContainer() {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.CARD);
  const [selectedFilter, setSelectedFilter] = useState<FilterType>(FilterType.ALL);
  const { reviews, stats, isLoading, error, toggleFavorite } = useAppData();
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
          onFilterChange={setSelectedFilter}
          reviewCounts={stats}
        />
        <ViewOptions currentView={currentView} onViewChange={setCurrentView} />
      </FlexBox>
      <GamesList
        isLoading={isLoading}
        error={error}
        games={reviews.map((review) => ({
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
