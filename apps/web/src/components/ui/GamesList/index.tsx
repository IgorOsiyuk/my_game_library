'use client';

import FlexBox from '@/atomic/FlexBox';
import Grid from '@/atomic/Grid';
import GameCard from '@/components/GameCard';
import GameCardTile from '@/components/GameCardTile';
import { ViewType } from '@/components/ViewOptions';
import { Game } from '@/data/games';
import GamesSkeleton from './GamesSkeleton';

// Компонент для отображения карточек игр
const GamesList = ({
  games,
  currentView,
  isLoading,
  error,
}: {
  games: Game[];
  currentView: ViewType;
  isLoading: boolean;
  error: string | null;
}) => {
  if (isLoading) {
    return <GamesSkeleton currentView={currentView} />;
  }

  if (error) {
    return (
      <FlexBox $justify="center" $align="center" $width="100%" $padding="s_24">
        <p>{error}</p>
      </FlexBox>
    );
  }

  if (games.length === 0) {
    return (
      <FlexBox $justify="center" $align="center" $width="100%" $padding="s_24">
        <p>Игры не найдены</p>
      </FlexBox>
    );
  }

  return (
    <>
      {currentView === ViewType.CARD ? (
        <Grid $width="100%" $gap="s_24" $columns="repeat(5,1fr)">
          {games.map((game: Game) => (
            <GameCard
              key={game.id}
              title={game.title}
              playTime={game.playTime || '0h'}
              genres={game.genres || []}
              rating={game.rating || '0'}
              status={game.status}
              image={game.image || '/images/default_card_image.jpg'}
            />
          ))}
        </Grid>
      ) : (
        <FlexBox $gap="s_8" $wrap="wrap">
          {games.map((game: Game) => (
            <GameCardTile
              key={game.id}
              title={game.title}
              playTime={game.playTime || '0h'}
              genres={game.genres || []}
              rating={game.rating || '0'}
              image={game.image || '/images/default_card_image.jpg'}
              platform={game.platform || 'Unknown'}
              developer={game.developer || 'Unknown'}
              status={game.status}
            />
          ))}
        </FlexBox>
      )}
    </>
  );
};

export default GamesList;
