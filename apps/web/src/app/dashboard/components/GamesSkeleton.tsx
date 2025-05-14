import Box from '@/atomic/Box';
import FlexBox from '@/atomic/FlexBox';
import Grid from '@/atomic/Grid';
import { ViewType } from '@/components/ViewOptions';
import { css, keyframes } from 'styled-components';

interface GamesSkeletonProps {
  currentView: ViewType;
}

// Создаем анимацию пульсации
const pulseAnimation = keyframes`
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
`;

// Стиль для пульсирующих элементов
const pulseStyle = css`
  animation: ${pulseAnimation} 1.5s ease-in-out infinite;
`;

export default function GamesSkeleton({ currentView }: GamesSkeletonProps) {
  // Массив для создания нескольких скелетонов
  const skeletons = Array.from({ length: 10 });

  if (currentView === ViewType.CARD) {
    return (
      <Grid $width="100%" $gap="s_24" $columns="repeat(5,1fr)">
        {skeletons.map((_, index) => (
          <Box
            key={index}
            $backgroundColor="darkSecondary"
            $sx={({ theme }) => css`
              border-radius: ${theme.radius.rounded_medium};
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              ${pulseStyle}
            `}
          >
            {/* Изображение */}
            <Box
              $height="214px"
              $width="100%"
              $backgroundColor="dark"
              $sx={css`
                position: relative;
              `}
            />

            {/* Контент */}
            <FlexBox $direction="column" $width="100%" $padding="s_16" $gap="s_24" $backgroundColor="dark">
              <FlexBox $direction="column" $gap="s_8">
                {/* Заголовок и время игры */}
                <FlexBox $gap="s_8" $align="center" $justify="space-between">
                  <Box
                    $height="20px"
                    $width="70%"
                    $backgroundColor="darkSecondary"
                    $sx={({ theme }) => css`
                      border-radius: ${theme.radius.rounded_small};
                    `}
                  />
                  <Box
                    $height="16px"
                    $width="20%"
                    $backgroundColor="darkSecondary"
                    $sx={({ theme }) => css`
                      border-radius: ${theme.radius.rounded_small};
                    `}
                  />
                </FlexBox>

                {/* Жанры */}
                <FlexBox $gap="s_4" $align="center">
                  <Box
                    $height="16px"
                    $width="60px"
                    $backgroundColor="darkSecondary"
                    $sx={({ theme }) => css`
                      border-radius: ${theme.radius.rounded_small};
                    `}
                  />
                  <Box
                    $height="16px"
                    $width="80px"
                    $backgroundColor="darkSecondary"
                    $sx={({ theme }) => css`
                      border-radius: ${theme.radius.rounded_small};
                    `}
                  />
                </FlexBox>
              </FlexBox>

              {/* Рейтинг и кнопки */}
              <FlexBox $justify="space-between">
                <FlexBox $gap="s_4" $align="center">
                  <Box
                    $height="16px"
                    $width="16px"
                    $backgroundColor="darkSecondary"
                    $sx={({ theme }) => css`
                      border-radius: ${theme.radius.rounded_small};
                    `}
                  />
                  <Box
                    $height="16px"
                    $width="24px"
                    $backgroundColor="darkSecondary"
                    $sx={({ theme }) => css`
                      border-radius: ${theme.radius.rounded_small};
                    `}
                  />
                </FlexBox>
                <FlexBox $gap="s_8" $align="center">
                  <Box
                    $height="16px"
                    $width="16px"
                    $backgroundColor="darkSecondary"
                    $sx={({ theme }) => css`
                      border-radius: ${theme.radius.rounded_small};
                    `}
                  />
                  <Box
                    $height="16px"
                    $width="16px"
                    $backgroundColor="darkSecondary"
                    $sx={({ theme }) => css`
                      border-radius: 4px;
                    `}
                  />
                </FlexBox>
              </FlexBox>
            </FlexBox>
          </Box>
        ))}
      </Grid>
    );
  }

  // Плиточный вид - на основе реального компонента GameCardTile
  return (
    <FlexBox $direction="column" $gap="s_8">
      {skeletons.slice(0, 6).map((_, index) => (
        <Grid
          key={index}
          $columns="341px 1fr 1fr 1fr 1fr 1fr 2fr 1fr"
          $align="center"
          $padding="s_8"
          $width="100%"
          $backgroundColor="dark"
          $sx={({ theme }) => css`
            border-radius: ${theme.radius.rounded_medium};
            overflow: hidden;
            ${pulseStyle}
          `}
        >
          {/* Информация о игре и изображение */}
          <FlexBox $gap="s_12" $align="center">
            {/* Изображение */}
            <Box
              $height="54px"
              $width="54px"
              $backgroundColor="darkSecondary"
              $sx={({ theme }) => css`
                border-radius: ${theme.radius.rounded_medium};
                overflow: hidden;
              `}
            />

            {/* Название и жанры */}
            <FlexBox $gap="s_8" $align="flex-start" $direction="column">
              <Box
                $height="20px"
                $width="160px"
                $backgroundColor="darkSecondary"
                $sx={({ theme }) => css`
                  border-radius: ${theme.radius.rounded_small};
                `}
              />
              <FlexBox $gap="s_4" $align="center">
                <Box
                  $height="14px"
                  $width="60px"
                  $backgroundColor="darkSecondary"
                  $sx={({ theme }) => css`
                    border-radius: ${theme.radius.rounded_small};
                  `}
                />
                <Box
                  $height="14px"
                  $width="70px"
                  $backgroundColor="darkSecondary"
                  $sx={({ theme }) => css`
                    border-radius: ${theme.radius.rounded_small};
                  `}
                />
              </FlexBox>
            </FlexBox>
          </FlexBox>

          {/* Рейтинг */}
          <FlexBox $gap="s_4" $align="center">
            <Box
              $height="16px"
              $width="16px"
              $backgroundColor="darkSecondary"
              $sx={({ theme }) => css`
                border-radius: ${theme.radius.rounded_small};
              `}
            />
            <Box
              $height="16px"
              $width="30px"
              $backgroundColor="darkSecondary"
              $sx={({ theme }) => css`
                border-radius: ${theme.radius.rounded_small};
              `}
            />
          </FlexBox>

          {/* Платформа */}
          <Box
            $height="16px"
            $width="80%"
            $backgroundColor="darkSecondary"
            $sx={({ theme }) => css`
              border-radius: ${theme.radius.rounded_small};
            `}
          />

          {/* Разработчик */}
          <Box
            $height="16px"
            $width="90%"
            $backgroundColor="darkSecondary"
            $sx={({ theme }) => css`
              border-radius: ${theme.radius.rounded_small};
            `}
          />

          {/* Время игры */}
          <Box
            $height="16px"
            $width="70%"
            $backgroundColor="darkSecondary"
            $sx={({ theme }) => css`
              border-radius: ${theme.radius.rounded_small};
            `}
          />

          {/* Жанры */}
          <FlexBox $gap="s_4" $align="center" $wrap="wrap">
            <Box
              $height="16px"
              $width="60px"
              $backgroundColor="darkSecondary"
              $sx={({ theme }) => css`
                border-radius: ${theme.radius.rounded_small};
              `}
            />
            <Box
              $height="16px"
              $width="70px"
              $backgroundColor="darkSecondary"
              $sx={({ theme }) => css`
                border-radius: ${theme.radius.rounded_small};
              `}
            />
          </FlexBox>

          {/* Пустая ячейка */}
          <Box />

          {/* Статус и кнопка */}
          <FlexBox $gap="s_20" $align="center" $justify="flex-end">
            <Box
              $height="24px"
              $width="80px"
              $backgroundColor="darkSecondary"
              $sx={({ theme }) => css`
                border-radius: ${theme.radius.rounded_small};
              `}
            />
            <Box
              $height="24px"
              $width="24px"
              $backgroundColor="darkSecondary"
              $sx={({ theme }) => css`
                border-radius: 4px;
              `}
            />
          </FlexBox>
        </Grid>
      ))}
    </FlexBox>
  );
}
