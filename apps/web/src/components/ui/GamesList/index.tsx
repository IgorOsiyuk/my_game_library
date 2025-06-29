'use client';

import FlexBox from '@/atomic/FlexBox';
import Grid from '@/atomic/Grid';
import { GameStatus } from '@/types/game';
import GameCard from '@/ui/GameCard';
import GameCardTile from '@/ui/GameCardTile';
import { ViewType } from '@/ui/ViewOptions';
import GamesSkeleton from './GamesSkeleton';

// Компонент для отображения карточек игр
interface Game {
  id: string;
  title: string;
  playTime: string;
  genres: string;
  rating: number;
  status: GameStatus;
  img: string;
  platforms: string;
  isFavorite: boolean;
}

interface GamesListProps {
  games: Game[];
  currentView: ViewType;
  isLoading: boolean;
  error: string | null;
}

const GamesList = ({ games, currentView, isLoading, error }: GamesListProps) => {
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
          {games.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              isFavorite={game.isFavorite}
              title={game.title}
              playTime={game.playTime}
              genres={game.genres}
              rating={game.rating}
              status={game.status}
              image={game.img || '/images/default_card_image.jpg'}
            />
          ))}
        </Grid>
      ) : (
        <FlexBox $gap="s_8" $wrap="wrap">
          {games.map((game) => (
            <GameCardTile
              id={game.id}
              key={game.id}
              title={game.title}
              playTime={game.playTime || '0'}
              genres={game.genres}
              rating={game.rating}
              image={game.img || '/images/default_card_image.jpg'}
              platforms={game.platforms}
              status={game.status}
            />
          ))}
        </FlexBox>
      )}
    </>
  );
};

export default GamesList;
