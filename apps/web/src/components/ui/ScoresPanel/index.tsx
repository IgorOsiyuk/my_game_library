import FlexBox from '@/atomic/FlexBox';
import Image from '@/atomic/Image';
import Text from '@/atomic/Text';
import Rating0Img from '@/images/rating-0.png';
import Rating1Img from '@/images/rating-1.png';
import Rating2Img from '@/images/rating-2.png';
import Rating3Img from '@/images/rating-3.png';
import Rating4Img from '@/images/rating-4.png';
import { StaticImageData } from 'next/image';
import { css } from 'styled-components';

interface ScoresPanelProps {
  score: number;
  plotScore: number;
  artScore: number;
  gameplayScore: number;
}

const getEmojiForValue = (value: number): StaticImageData => {
  if (value <= 1) return Rating0Img;
  if (value <= 2) return Rating1Img;
  if (value <= 3) return Rating2Img;
  if (value <= 4) return Rating3Img;
  return Rating4Img;
};

export default function ScoresPanel({ score, plotScore, artScore, gameplayScore }: ScoresPanelProps) {
  return (
    <FlexBox
      $px="s_20"
      $py="s_24"
      $backgroundColor="dark"
      $gap="s_32"
      $direction="column"
      $sx={({ theme }) => css`
        border-radius: ${theme.radius.rounded_medium};
        overflow: hidden;
        margin-left: 142px;
        flex: 0 0 auto;
      `}
    >
      <FlexBox $direction="column" $gap="s_12">
        <Text size="body_M" color="greySecondary">
          Оценка игры
        </Text>
        <FlexBox $gap="s_8" $wrap="nowrap" $justify="space-between" $align="center">
          <Text size="title_L" color="yellow" fontWeight="bold">
            {score}
          </Text>
          <Image
            alt="rating-image"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
            $sx={css`
              width: 70px;
              height: 70px;
              pointer-events: none;
            `}
            src={getEmojiForValue(score)}
          />
        </FlexBox>
      </FlexBox>
      <FlexBox $direction="column" $gap="s_12">
        <Text size="body_M" color="greySecondary">
          Сюжет
        </Text>
        <FlexBox $gap="s_8" $wrap="nowrap" $justify="space-between" $align="center">
          <Text size="title_L" color="yellow" fontWeight="bold">
            {plotScore}
          </Text>
          <Image
            alt="rating-image"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
            $sx={css`
              width: 70px;
              height: 70px;
              pointer-events: none;
            `}
            src={getEmojiForValue(plotScore)}
          />
        </FlexBox>
      </FlexBox>
      <FlexBox $direction="column" $gap="s_12">
        <Text size="body_M" color="greySecondary">
          Art
        </Text>
        <FlexBox $gap="s_8" $wrap="nowrap" $justify="space-between" $align="center">
          <Text size="title_L" color="yellow" fontWeight="bold">
            {artScore}
          </Text>
          <Image
            alt="rating-image"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
            $sx={css`
              width: 70px;
              height: 70px;
              pointer-events: none;
            `}
            src={getEmojiForValue(artScore)}
          />
        </FlexBox>
      </FlexBox>
      <FlexBox $direction="column" $gap="s_12">
        <Text size="body_M" color="greySecondary">
          Геймплей
        </Text>
        <FlexBox $gap="s_8" $wrap="nowrap" $justify="space-between" $align="center">
          <Text size="title_L" color="yellow" fontWeight="bold">
            {gameplayScore}
          </Text>
          <Image
            alt="rating-image"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
            $sx={css`
              width: 70px;
              height: 70px;
              pointer-events: none;
            `}
            src={getEmojiForValue(gameplayScore)}
          />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
