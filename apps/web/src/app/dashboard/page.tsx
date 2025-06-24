'use client';

import Box from '@/atomic/Box';
import Button from '@/atomic/Button';
import FlexBox from '@/atomic/FlexBox';
import SvgImage from '@/atomic/SvgImage';
import Text from '@/atomic/Text';
import PlusIcon from '@/icons/plus.svg';

import { useState } from 'react';
import { css } from 'styled-components';
import CreateReviewModalContainer from './components/CreateReviewModalContainer';
import GamesContainer from './components/GamesContainer';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FlexBox $py="s_24" $direction="column" $gap="s_56">
      <FlexBox $align="center" $justify="space-between" $width="100%">
        <Box>
          <Text color="white" size="title_M" fontWeight="bold">
            Моя библиотека
          </Text>
        </Box>
        <FlexBox $gap="s_16">
          {/* <Button
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
          </Button> */}
          <Button
            textSize="button"
            color="accent"
            spacing="s_14"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(true);
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
      <GamesContainer />
      <CreateReviewModalContainer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </FlexBox>
  );
}
