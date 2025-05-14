'use client';

import FlexBox from '@/atomic/FlexBox';
import { ViewType } from '@/components/ViewOptions';
import { games } from '@/data/games';
import { useState } from 'react';
import GamesList from './GamesList';
import GamesSkeleton from './GamesSkeleton';

interface GamesContainerProps {
  currentView: ViewType;
}

export default function GamesContainer({ currentView }: GamesContainerProps) {
  const [reviews, setReviews] = useState(games);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  if (error) {
    return (
      <FlexBox $justify="center" $align="center" $width="100%" $padding="s_24">
        <p>{error}</p>
      </FlexBox>
    );
  }

  if (isLoading) {
    return <GamesSkeleton currentView={currentView} />;
  }

  return <GamesList games={reviews} currentView={currentView} />;
}
