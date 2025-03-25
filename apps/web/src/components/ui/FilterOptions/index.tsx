'use client';

import Button from '@/atomic/Button';
import FlexBox from '@/atomic/FlexBox';
import SvgImage from '@/atomic/SvgImage';
import Text from '@/atomic/Text';
import PlusIcon from '@/icons/plus.svg';
import { css } from 'styled-components';

const FilterOptions = () => {
  return (
    <FlexBox
      $gap="s_12"
      $justify="flex-start"
      $sx={({ theme }) => css`
        button:hover {
          background-color: ${theme.colors.accentSecondary};
          transition: all 0.25s;
          span {
            color: ${theme.colors.white};
          }
          svg {
            path {
              fill: ${theme.colors.white};
            }
          }
        }
      `}
    >
      <Button
        textSize="body_M"
        color={true ? 'accent' : 'darkSecondary'}
        spacing="s_12"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Все (24)
      </Button>
      <Button
        color="darkSecondary"
        spacing="s_12"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <Text color="greySecondary" size="body_M">
          Пройдено (12)
        </Text>
      </Button>
      <Button
        color="darkSecondary"
        spacing="s_12"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <Text color="greySecondary" size="body_M">
          В процессе (5)
        </Text>
      </Button>
      <Button
        color="darkSecondary"
        spacing="s_12"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <Text color="greySecondary" size="body_M">
          Заброшенo (3)
        </Text>
      </Button>
      <Button
        color="darkSecondary"
        spacing="s_12"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <Text color="greySecondary" size="body_M">
          Запланированo (4)
        </Text>
      </Button>
      <Button
        color="darkSecondary"
        spacing="s_12"
        onClick={(e) => {
          e.preventDefault();
        }}
        icon={
          <SvgImage $height="16px" $width="16px" $fill="greySecondary">
            <PlusIcon />
          </SvgImage>
        }
      >
        <Text color="greySecondary" size="body_M">
          Избранные
        </Text>
      </Button>
    </FlexBox>
  );
};

export default FilterOptions;
