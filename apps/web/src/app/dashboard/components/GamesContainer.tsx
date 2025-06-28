'use client';

import FlexBox from '@/atomic/FlexBox';
import setToFavorite from '@/lib/api/setToFavorite';
import { useAppData } from '@/lib/hooks/useAppData';
import { useFilter } from '@/lib/hooks/useFilter';
import { useInititalData } from '@/lib/hooks/useInititalData';
import FilterOptions from '@/ui/FilterOptions';
import GamesList from '@/ui/GamesList';
import ViewOptions, { ViewType } from '@/ui/ViewOptions';
import { useState } from 'react';

export default function GamesContainer() {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.CARD);
  const { stats, isLoading, error, toggleFavorite } = useAppData();
  const { selectedFilter, filteredReviews, setFilter } = useFilter();
  console.log(filteredReviews);
  useInititalData();

  const toggleFavoriteHandler = (id: string) => {
    setToFavorite(id).then(() => {
      toggleFavorite(id);
    });
  };
  const games = filteredReviews.map((review) => ({
    img: review.img,
    genres: review.genres,
    rating: review.rating,
    isFavorite: review.isFavorite,
    id: review.id,
    title: review.title,
    playTime: review.playTime,
    status: review.status,
    platforms: review.platforms,
  }));

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
      <GamesList isLoading={isLoading} error={error} games={games} currentView={currentView} />
    </FlexBox>
  );
}
