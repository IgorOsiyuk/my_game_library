'use client';

import Box from '@/atomic/Box';
import Button from '@/atomic/Button';
import FlexBox from '@/atomic/FlexBox';
import SvgImage from '@/atomic/SvgImage';
import Text from '@/atomic/Text';

import Grid from '@/atomic/Grid';
import { comingSoon, latestReleases, popularGames } from '@/data/games';
import SearchIcon from '@/icons/search.svg';
import GameCard from '@/ui/GameCard';
import { css } from 'styled-components';

export default function Games() {
  return (
    <FlexBox $py="s_24" $direction="column" $gap="s_56">
      <FlexBox $align="center" $justify="space-between" $width="100%">
        <Box>
          <Text color="white" size="title_M" fontWeight="bold">
            Игры
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
          >
            Поиск
          </Button>
        </FlexBox>
      </FlexBox>
      <Grid $width="100%" $gap="s_20" $columns="3fr 2fr">
        <FlexBox $direction="column" $gap="s_24">
          <Box
            $sx={css`
              grid-column: 1 / span 3;
            `}
          >
            <Text color="white" size="small_titles" fontWeight="medium">
              Последние релизы
            </Text>
          </Box>
          <Grid $columns="repeat(3, 1fr)" $gap="s_20">
            {latestReleases.map((game, index) => (
              <Box
                key={index}
                $sx={css`
                  grid-column: ${index === 0 ? '1 / span 3' : 'auto'};
                `}
              >
                <GameCard {...game} isLarge={index === 0} />
              </Box>
            ))}
          </Grid>
        </FlexBox>
        <FlexBox $direction="column" $gap="s_56">
          <FlexBox $direction="column" $gap="s_24">
            <Box
              $sx={css`
                grid-column: 1 / span 2;
              `}
            >
              <Text color="white" size="small_titles" fontWeight="medium">
                Популярные игры
              </Text>
            </Box>
            <Grid $columns="repeat(2, 1fr)" $gap="s_20">
              {popularGames.map((game, index) => (
                <GameCard key={index} {...game} />
              ))}
            </Grid>
          </FlexBox>
          <FlexBox $direction="column" $gap="s_24">
            <Box
              $sx={css`
                grid-column: 1 / span 2;
              `}
            >
              <Text color="white" size="small_titles" fontWeight="medium">
                Coming soon
              </Text>
            </Box>
            <Grid $columns="repeat(2, 1fr)" $gap="s_20">
              {comingSoon.map((game, index) => (
                <GameCard key={index} {...game} />
              ))}
            </Grid>
          </FlexBox>
        </FlexBox>
      </Grid>
    </FlexBox>
  );
}
