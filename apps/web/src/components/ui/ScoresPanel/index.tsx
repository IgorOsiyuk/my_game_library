import FlexBox from '@/atomic/FlexBox';
import Image from '@/atomic/Image';
import Text from '@/atomic/Text';
import { getEmojiForValue } from '@/lib/utils';
import { css } from 'styled-components';

interface ScoresPanelProps {
  score: number;
  plotScore: number;
  artScore: number;
  gameplayScore: number;
  averageScore: number;
}

export default function ScoresPanel({ score, plotScore, artScore, gameplayScore, averageScore }: ScoresPanelProps) {
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
          Средняя оценка
        </Text>
        <FlexBox $gap="s_8" $wrap="nowrap" $justify="space-between" $align="center">
          <Text size="title_L" color="yellow" fontWeight="bold">
            {Math.round(averageScore * 10) / 10}
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
            src={getEmojiForValue(averageScore)}
          />
        </FlexBox>
      </FlexBox>
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
