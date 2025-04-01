'use client';

import Box from '@/atomic/Box';
import Button from '@/atomic/Button';
import FlexBox from '@/atomic/FlexBox';
import SvgImage from '@/atomic/SvgImage';
import Text from '@/atomic/Text';
import FilterOptions from '@/components/FilterOptions';
import ViewOptions, { ViewType } from '@/components/ViewOptions';
import PlusIcon from '@/icons/plus.svg';

import Grid from '@/atomic/Grid';
import GameCard from '@/components/GameCard';
import GameCardTile from '@/components/GameCardTile';
import { CustomSelect } from '@/components/Select';
import { games } from '@/data/games';
import SearchIcon from '@/icons/search.svg';
import { useState } from 'react';
import { css } from 'styled-components';

export default function Dashboard() {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.CARD);

  return (
    <FlexBox $py="s_24" $direction="column" $gap="s_56">
      <FlexBox $align="center" $justify="space-between" $width="100%">
        <Box>
          <Text color="white" size="title_M" fontWeight="bold">
            Моя библиотека
          </Text>
        </Box>
        <FlexBox $gap="s_16">
          <Button
            textSize="button"
            color="darkSecondary"
            spacing="s_14"
            onClick={(e) => {
              e.preventDefault();
            }}
            icon={
              <SvgImage $height="20px" $width="20px">
                <SearchIcon />
              </SvgImage>
            }
            sx={({ theme }) => css`
              background-color: ${theme.colors.grey};
            `}
          >
            Поиск
          </Button>
          <Button
            textSize="button"
            color="accent"
            spacing="s_14"
            onClick={(e) => {
              e.preventDefault();
            }}
            icon={
              <SvgImage $height="20px" $width="20px" $fill="white">
                <PlusIcon />
              </SvgImage>
            }
            sx={({ theme }) => css`
              background-color: ${theme.colors.accentSecondary};
            `}
          >
            Добавить игру
          </Button>
        </FlexBox>
      </FlexBox>
      <FlexBox $direction="column" $gap="s_32">
        <FlexBox $justify="space-between">
          <FilterOptions />
          <ViewOptions currentView={currentView} onViewChange={setCurrentView} />
        </FlexBox>
        {currentView === ViewType.CARD ? (
          <Grid $width="100%" $gap="s_24" $columns="repeat(5,1fr)">
            {games.map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                playTime={game.playTime}
                genres={game.genres}
                rating={game.rating}
                status={game.status}
                image={game.image}
              />
            ))}
          </Grid>
        ) : (
          <FlexBox $gap="s_8" $wrap="wrap">
            {games.map((game) => (
              <GameCardTile
                key={game.id}
                title={game.title}
                playTime={game.playTime}
                genres={game.genres}
                rating={game.rating}
                image={game.image}
                platform={game.platform}
                developer={game.developer}
                status={game.status}
              />
            ))}
          </FlexBox>
        )}
      </FlexBox>
      <CustomSelect
        options={[
          { value: 'all', label: 'Все игры' },
          { value: 'favorites', label: 'Избранное' },
          { value: 'recent', label: 'Недавно добавленные' },
          { value: 'completed', label: 'Завершенные' },
          { value: 'in_progress', label: 'В процессе' },
        ]}
        placeholder="Фильтр по статусу"
        onChange={(option) => console.log('Selected:', option)}
        // sx={({ theme }) => css`
        //   width: 200px;
        // `}
      />
    </FlexBox>
  );
}
