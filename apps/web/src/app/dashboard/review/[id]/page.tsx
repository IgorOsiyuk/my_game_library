'use client';
import Box from '@/atomic/Box';
import FlexBox from '@/atomic/FlexBox';
import Grid from '@/atomic/Grid';
import Image from '@/atomic/Image';
import SvgImage from '@/atomic/SvgImage';
import Text from '@/atomic/Text';
import ArrowIcon from '@/icons/arrow.svg';
import FavoriteIcon from '@/icons/heart.svg';
import PencilIcon from '@/icons/pencil.svg';
import setToFavorite from '@/lib/api/setToFavorite';
import { useAppData } from '@/lib/hooks/useAppData';
import { useGetReview } from '@/lib/hooks/useGetReview';
import { GameStatusVariantMap } from '@/lib/utils';
import ScoresPanel from '@/ui/ScoresPanel';
import StatusLabel from '@/ui/StatusLabel';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { css } from 'styled-components';
import UpdateReviewModalContainer from './components/UpdateReviewModalContainer';

export default function Game() {
  const router = useRouter();
  useGetReview();
  const [isOpen, setIsOpen] = useState(false);

  const { selectedReview, toggleFavorite } = useAppData();

  const setFavorite = (id: string) => {
    setToFavorite(id).then(() => {
      toggleFavorite(id);
    });
  };

  if (!selectedReview) {
    return <div>Loading...</div>;
  }
  return (
    <FlexBox $direction="column" $gap="s_32">
      <Box
        as="button"
        onClick={() => router.back()}
        $sx={({ theme }) => css`
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: ${theme.spacing.s_8};
          opacity: 0.6;
          svg {
            transform: rotate(90deg);
            transition: transform 0.3s ease;
          }
          &:hover {
            opacity: 1;
            transition: opacity 0.3s ease;
            svg {
              transform: translateX(-100%) rotate(90deg);
            }
          }
        `}
      >
        <SvgImage $height="16px" $width="16px" $fill="white">
          <ArrowIcon />
        </SvgImage>
        <Text size="body_M" color="white">
          Back
        </Text>
      </Box>
      <FlexBox $justify="space-between" $align="flex-start">
        <FlexBox $gap="s_32">
          <FlexBox $direction="column" $gap="s_14">
            <FlexBox>
              <Box
                $height="337px"
                $width="337px"
                $sx={({ theme }) => css`
                  border-radius: ${theme.radius.rounded_medium};
                  overflow: hidden;
                `}
              >
                <Image
                  alt="card-image"
                  src={selectedReview.img}
                  fill
                  sizes="80vw"
                  style={{
                    objectFit: 'cover',
                  }}
                  $sx={css`
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                  `}
                />
              </Box>
            </FlexBox>
            <FlexBox $gap="s_12">
              <Box
                as={'button'}
                $padding="s_12"
                $backgroundColor="darkSecondary"
                $sx={({ theme }) => css`
                  border-radius: ${theme.radius.rounded_medium};
                  overflow: hidden;
                  cursor: pointer;
                  &:hover {
                    background-color: ${theme.colors.dark};
                    transition: background-color 0.3s ease;
                  }
                `}
                onClick={() => setIsOpen(true)}
              >
                <SvgImage $height="20px" $width="20px" $fill="white">
                  <PencilIcon />
                </SvgImage>
              </Box>
              <Box
                as={'button'}
                $padding="s_12"
                $backgroundColor="darkSecondary"
                onClick={() => {
                  setFavorite(selectedReview.id);
                }}
                $sx={({ theme }) => css`
                  border-radius: ${theme.radius.rounded_medium};
                  overflow: hidden;
                  cursor: pointer;
                  &:hover {
                    background-color: ${theme.colors.dark};
                    transition: background-color 0.3s ease;
                  }
                `}
              >
                <SvgImage $height="20px" $width="20px" $fill={selectedReview.isFavorite ? 'red' : 'white'}>
                  <FavoriteIcon />
                </SvgImage>
              </Box>
            </FlexBox>
          </FlexBox>
          <Box>
            <FlexBox $direction="column" $gap="s_24" $width="auto" $align="flex-start">
              <StatusLabel label={selectedReview.status} variant={GameStatusVariantMap[selectedReview.status]} />
              <FlexBox $direction="column" $gap="s_32">
                <Text size="title_L" color="white">
                  {selectedReview.title}
                </Text>
                <Grid $columns="4fr 2fr" $gap="s_20">
                  <FlexBox $direction="column" $gap="s_14">
                    {selectedReview.releaseDate && (
                      <Grid $columns="1fr 3fr" $gap="s_20" $align="center">
                        <Text size="body_M" color="greySecondary">
                          Год выпуска:
                        </Text>
                        <FlexBox $wrap="wrap" $gap="s_8">
                          <Box
                            $padding="s_8"
                            $backgroundColor="dark"
                            $sx={({ theme }) => css`
                              border-radius: ${theme.radius.rounded_small};
                              overflow: hidden;
                            `}
                          >
                            <Text size="body_S" color="white">
                              {selectedReview.releaseDate}
                            </Text>
                          </Box>
                        </FlexBox>
                      </Grid>
                    )}
                    {/* <Grid $columns="1fr 3fr" $gap="s_20" $align="center">
                      <Text size="body_M" color="greySecondary">
                        Разработчики:
                      </Text>
                      <FlexBox $wrap="wrap" $gap="s_8">
                        <Box
                          $padding="s_8"
                          $backgroundColor="dark"
                          $sx={({ theme }) => css`
                            border-radius: ${theme.radius.rounded_small};
                            overflow: hidden;
                          `}
                        >
                          <Text size="body_S" color="white">
                            CD PROJEKT RED
                          </Text>
                        </Box>
                      </FlexBox>
                    </Grid>
                    <Grid $columns="1fr 3fr" $gap="s_20" $align="center">
                      <Text size="body_M" color="greySecondary">
                        Издатель:
                      </Text>
                      <FlexBox $wrap="wrap" $gap="s_8">
                        <Box
                          $padding="s_8"
                          $backgroundColor="dark"
                          $sx={({ theme }) => css`
                            border-radius: ${theme.radius.rounded_small};
                            overflow: hidden;
                          `}
                        >
                          <Text size="body_S" color="white">
                            CD PROJEKT RED
                          </Text>
                        </Box>
                      </FlexBox>
                    </Grid> */}
                    {selectedReview.platforms && (
                      <Grid $columns="1fr 3fr" $gap="s_20" $align="center">
                        <Text size="body_M" color="greySecondary">
                          Платформы:
                        </Text>
                        <FlexBox $wrap="wrap" $gap="s_8">
                          {/* <Box
                          $padding="s_8"
                          $backgroundColor="dark"
                          $sx={({ theme }) => css`
                            border-radius: ${theme.radius.rounded_small};
                            overflow: hidden;
                          `}
                        >
                          <Text size="body_S" color="white">
                            Playstation 4
                          </Text>
                        </Box>
                        <Box
                          $padding="s_8"
                          $backgroundColor="dark"
                          $sx={({ theme }) => css`
                            border-radius: ${theme.radius.rounded_small};
                            overflow: hidden;
                          `}
                        >
                          <Text size="body_S" color="white">
                            PC
                          </Text>
                        </Box> */}

                          <Box
                            $padding="s_8"
                            $backgroundColor="dark"
                            $sx={({ theme }) => css`
                              border-radius: ${theme.radius.rounded_small};
                              overflow: hidden;
                            `}
                          >
                            <Text size="body_S" color="white">
                              {selectedReview.platforms}
                            </Text>
                          </Box>
                        </FlexBox>
                      </Grid>
                    )}
                    <Grid $columns="1fr 3fr" $gap="s_20" $align="center">
                      <Text size="body_M" color="greySecondary">
                        Жанр:
                      </Text>
                      <FlexBox $wrap="wrap" $gap="s_8">
                        <Box
                          $padding="s_8"
                          $backgroundColor="dark"
                          $sx={({ theme }) => css`
                            border-radius: ${theme.radius.rounded_small};
                            overflow: hidden;
                          `}
                        >
                          <Text size="body_S" color="white">
                            {selectedReview.genres}
                          </Text>
                        </Box>
                        {/* <Box
                          $padding="s_8"
                          $backgroundColor="dark"
                          $sx={({ theme }) => css`
                            border-radius: ${theme.radius.rounded_small};
                            overflow: hidden;
                          `}
                        >
                          <Text size="body_S" color="white">
                            Adventure
                          </Text>
                        </Box> */}
                      </FlexBox>
                    </Grid>
                  </FlexBox>
                  <FlexBox $direction="column" $gap="s_14">
                    {selectedReview.playTime && (
                      <Text size="body_M" color="greySecondary">
                        Время прохождения: {selectedReview.playTime}
                      </Text>
                    )}
                    {selectedReview.difficulty && (
                      <Text size="body_M" color="greySecondary">
                        Сложность: {selectedReview.difficulty}
                      </Text>
                    )}
                    {/* <Text size="body_M" color="greySecondary">
                      Трофеи: {selectedReview.trophies}
                    </Text> */}
                  </FlexBox>
                </Grid>
              </FlexBox>
            </FlexBox>
            <FlexBox $direction="column" $mt="s_56" $gap="s_32">
              <FlexBox $direction="column" $gap="s_14">
                <Text size="body_M" color="white" fontWeight="bold">
                  Сюжет
                </Text>
                <Text size="body_M" color="white" fontWeight="light">
                  {selectedReview.plot}
                </Text>
              </FlexBox>
              <FlexBox $direction="column" $gap="s_14">
                <Text size="body_M" color="white" fontWeight="bold">
                  Отзыв
                </Text>
                <Text size="body_M" color="white" fontWeight="light">
                  {selectedReview.review}
                </Text>
              </FlexBox>
            </FlexBox>
          </Box>
        </FlexBox>
        <ScoresPanel
          score={selectedReview.gameScore}
          plotScore={selectedReview.plotScore}
          artScore={selectedReview.artScore}
          gameplayScore={selectedReview.gameplayScore}
        />
      </FlexBox>
      {isOpen && <UpdateReviewModalContainer onClose={() => setIsOpen(false)} review={selectedReview} />}
    </FlexBox>
  );
}
