'use client';

import Box from '@/atomic/Box';
import Button from '@/atomic/Button';
import FlexBox from '@/atomic/FlexBox';
import Image from '@/atomic/Image';
import SvgImage from '@/atomic/SvgImage';
import Text from '@/atomic/Text';
import PlusIcon from '@/icons/plus.svg';
import StarIcon from '@/icons/star.svg';

import Grid from '@/atomic/Grid';
import SearchIcon from '@/icons/search.svg';
import DefaultCardImage from '@/images/default_card_image.jpg';
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
            <FlexBox
              $width="100%"
              $direction="column"
              $sx={({ theme }) => css`
                grid-column: 1 / span 3;
                border-radius: ${theme.radius.rounded_medium};
                overflow: hidden;
              `}
            >
              <FlexBox
                $direction="column"
                $height="445px"
                $width="100%"
                $sx={css`
                  position: relative;
                `}
              >
                <Image
                  alt="card-image"
                  src={DefaultCardImage.src}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                  }}
                  $sx={css`
                    width: 100%;
                    height: 100%;
                  `}
                />
              </FlexBox>
              <FlexBox $direction="column" $width="100%" $padding="s_16" $gap="s_24" $backgroundColor="dark">
                <FlexBox $direction="column" $gap="s_8">
                  <FlexBox $gap="s_8" $align="center">
                    <Text size="body_M" color="white" fontWeight="medium">
                      God of War Ragnarök
                    </Text>
                  </FlexBox>
                  <FlexBox $gap="s_4" $align="center">
                    <Text size="body_S" color="greySecondary">
                      Action
                    </Text>
                    <Text size="body_S" color="greySecondary">
                      Adventure
                    </Text>
                  </FlexBox>
                </FlexBox>
                <FlexBox $justify="space-between">
                  <FlexBox $gap="s_4" $align="center">
                    <SvgImage $height="16px" $width="16px" $fill="white">
                      <StarIcon />
                    </SvgImage>
                    <Text size="body_M" color="white">
                      1.0
                    </Text>
                  </FlexBox>
                  <FlexBox $gap="s_8" $align="center">
                    <Box
                      as={'button'}
                      $sx={css`
                        cursor: pointer;
                      `}
                    >
                      <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                        <PlusIcon />
                      </SvgImage>
                    </Box>
                    <Box
                      as={'button'}
                      $sx={css`
                        cursor: pointer;
                      `}
                    >
                      <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                        <PlusIcon />
                      </SvgImage>
                    </Box>
                  </FlexBox>
                </FlexBox>
              </FlexBox>
            </FlexBox>
            <FlexBox
              $width="100%"
              $direction="column"
              $sx={({ theme }) => css`
                border-radius: ${theme.radius.rounded_medium};
                overflow: hidden;
              `}
            >
              <FlexBox
                $direction="column"
                $height="214px"
                $width="100%"
                $sx={css`
                  position: relative;
                `}
              >
                <Image
                  alt="card-image"
                  src={DefaultCardImage.src}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                  }}
                  $sx={css`
                    width: 100%;
                    height: 100%;
                  `}
                />
              </FlexBox>
              <FlexBox $direction="column" $width="100%" $padding="s_16" $gap="s_24" $backgroundColor="dark">
                <FlexBox $direction="column" $gap="s_8">
                  <FlexBox $gap="s_8" $align="center">
                    <Text size="body_M" color="white" fontWeight="medium">
                      God of War Ragnarök
                    </Text>
                  </FlexBox>
                  <FlexBox $gap="s_4" $align="center">
                    <Text size="body_S" color="greySecondary">
                      Action
                    </Text>
                    <Text size="body_S" color="greySecondary">
                      Adventure
                    </Text>
                  </FlexBox>
                </FlexBox>
                <FlexBox $justify="space-between">
                  <FlexBox $gap="s_4" $align="center">
                    <SvgImage $height="16px" $width="16px" $fill="white">
                      <StarIcon />
                    </SvgImage>
                    <Text size="body_M" color="white">
                      1.0
                    </Text>
                  </FlexBox>
                  <FlexBox $gap="s_8" $align="center">
                    <Box
                      as={'button'}
                      $sx={css`
                        cursor: pointer;
                      `}
                    >
                      <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                        <PlusIcon />
                      </SvgImage>
                    </Box>
                    <Box
                      as={'button'}
                      $sx={css`
                        cursor: pointer;
                      `}
                    >
                      <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                        <PlusIcon />
                      </SvgImage>
                    </Box>
                  </FlexBox>
                </FlexBox>
              </FlexBox>
            </FlexBox>
            <FlexBox
              $width="100%"
              $direction="column"
              $sx={({ theme }) => css`
                border-radius: ${theme.radius.rounded_medium};
                overflow: hidden;
              `}
            >
              <FlexBox
                $direction="column"
                $height="214px"
                $width="100%"
                $sx={css`
                  position: relative;
                `}
              >
                <Image
                  alt="card-image"
                  src={DefaultCardImage.src}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                  }}
                  $sx={css`
                    width: 100%;
                    height: 100%;
                  `}
                />
              </FlexBox>
              <FlexBox $direction="column" $width="100%" $padding="s_16" $gap="s_24" $backgroundColor="dark">
                <FlexBox $direction="column" $gap="s_8">
                  <FlexBox $gap="s_8" $align="center">
                    <Text size="body_M" color="white" fontWeight="medium">
                      God of War Ragnarök
                    </Text>
                  </FlexBox>
                  <FlexBox $gap="s_4" $align="center">
                    <Text size="body_S" color="greySecondary">
                      Action
                    </Text>
                    <Text size="body_S" color="greySecondary">
                      Adventure
                    </Text>
                  </FlexBox>
                </FlexBox>
                <FlexBox $justify="space-between">
                  <FlexBox $gap="s_4" $align="center">
                    <SvgImage $height="16px" $width="16px" $fill="white">
                      <StarIcon />
                    </SvgImage>
                    <Text size="body_M" color="white">
                      1.0
                    </Text>
                  </FlexBox>
                  <FlexBox $gap="s_8" $align="center">
                    <Box
                      as={'button'}
                      $sx={css`
                        cursor: pointer;
                      `}
                    >
                      <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                        <PlusIcon />
                      </SvgImage>
                    </Box>
                    <Box
                      as={'button'}
                      $sx={css`
                        cursor: pointer;
                      `}
                    >
                      <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                        <PlusIcon />
                      </SvgImage>
                    </Box>
                  </FlexBox>
                </FlexBox>
              </FlexBox>
            </FlexBox>
            <FlexBox
              $width="100%"
              $direction="column"
              $sx={({ theme }) => css`
                border-radius: ${theme.radius.rounded_medium};
                overflow: hidden;
              `}
            >
              <FlexBox
                $direction="column"
                $height="214px"
                $width="100%"
                $sx={css`
                  position: relative;
                `}
              >
                <Image
                  alt="card-image"
                  src={DefaultCardImage.src}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                  }}
                  $sx={css`
                    width: 100%;
                    height: 100%;
                  `}
                />
              </FlexBox>
              <FlexBox $direction="column" $width="100%" $padding="s_16" $gap="s_24" $backgroundColor="dark">
                <FlexBox $direction="column" $gap="s_8">
                  <FlexBox $gap="s_8" $align="center">
                    <Text size="body_M" color="white" fontWeight="medium">
                      God of War Ragnarök
                    </Text>
                  </FlexBox>
                  <FlexBox $gap="s_4" $align="center">
                    <Text size="body_S" color="greySecondary">
                      Action
                    </Text>
                    <Text size="body_S" color="greySecondary">
                      Adventure
                    </Text>
                  </FlexBox>
                </FlexBox>
                <FlexBox $justify="space-between">
                  <FlexBox $gap="s_4" $align="center">
                    <SvgImage $height="16px" $width="16px" $fill="white">
                      <StarIcon />
                    </SvgImage>
                    <Text size="body_M" color="white">
                      1.0
                    </Text>
                  </FlexBox>
                  <FlexBox $gap="s_8" $align="center">
                    <Box
                      as={'button'}
                      $sx={css`
                        cursor: pointer;
                      `}
                    >
                      <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                        <PlusIcon />
                      </SvgImage>
                    </Box>
                    <Box
                      as={'button'}
                      $sx={css`
                        cursor: pointer;
                      `}
                    >
                      <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                        <PlusIcon />
                      </SvgImage>
                    </Box>
                  </FlexBox>
                </FlexBox>
              </FlexBox>
            </FlexBox>
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
              <FlexBox
                $width="100%"
                $direction="column"
                $sx={({ theme }) => css`
                  border-radius: ${theme.radius.rounded_medium};
                  overflow: hidden;
                `}
              >
                <FlexBox
                  $direction="column"
                  $height="214px"
                  $width="100%"
                  $sx={css`
                    position: relative;
                  `}
                >
                  <Image
                    alt="card-image"
                    src={DefaultCardImage.src}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: 'cover',
                    }}
                    $sx={css`
                      width: 100%;
                      height: 100%;
                    `}
                  />
                </FlexBox>
                <FlexBox $direction="column" $width="100%" $padding="s_16" $gap="s_24" $backgroundColor="dark">
                  <FlexBox $direction="column" $gap="s_8">
                    <FlexBox $gap="s_8" $align="center">
                      <Text size="body_M" color="white" fontWeight="medium">
                        God of War Ragnarök
                      </Text>
                    </FlexBox>
                    <FlexBox $gap="s_4" $align="center">
                      <Text size="body_S" color="greySecondary">
                        Action
                      </Text>
                      <Text size="body_S" color="greySecondary">
                        Adventure
                      </Text>
                    </FlexBox>
                  </FlexBox>
                  <FlexBox $justify="space-between">
                    <FlexBox $gap="s_4" $align="center">
                      <SvgImage $height="16px" $width="16px" $fill="white">
                        <StarIcon />
                      </SvgImage>
                      <Text size="body_M" color="white">
                        1.0
                      </Text>
                    </FlexBox>
                    <FlexBox $gap="s_8" $align="center">
                      <Box
                        as={'button'}
                        $sx={css`
                          cursor: pointer;
                        `}
                      >
                        <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                          <PlusIcon />
                        </SvgImage>
                      </Box>
                      <Box
                        as={'button'}
                        $sx={css`
                          cursor: pointer;
                        `}
                      >
                        <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                          <PlusIcon />
                        </SvgImage>
                      </Box>
                    </FlexBox>
                  </FlexBox>
                </FlexBox>
              </FlexBox>
              <FlexBox
                $width="100%"
                $direction="column"
                $sx={({ theme }) => css`
                  border-radius: ${theme.radius.rounded_medium};
                  overflow: hidden;
                `}
              >
                <FlexBox
                  $direction="column"
                  $height="214px"
                  $width="100%"
                  $sx={css`
                    position: relative;
                  `}
                >
                  <Image
                    alt="card-image"
                    src={DefaultCardImage.src}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: 'cover',
                    }}
                    $sx={css`
                      width: 100%;
                      height: 100%;
                    `}
                  />
                </FlexBox>
                <FlexBox $direction="column" $width="100%" $padding="s_16" $gap="s_24" $backgroundColor="dark">
                  <FlexBox $direction="column" $gap="s_8">
                    <FlexBox $gap="s_8" $align="center">
                      <Text size="body_M" color="white" fontWeight="medium">
                        God of War Ragnarök
                      </Text>
                    </FlexBox>
                    <FlexBox $gap="s_4" $align="center">
                      <Text size="body_S" color="greySecondary">
                        Action
                      </Text>
                      <Text size="body_S" color="greySecondary">
                        Adventure
                      </Text>
                    </FlexBox>
                  </FlexBox>
                  <FlexBox $justify="space-between">
                    <FlexBox $gap="s_4" $align="center">
                      <SvgImage $height="16px" $width="16px" $fill="white">
                        <StarIcon />
                      </SvgImage>
                      <Text size="body_M" color="white">
                        1.0
                      </Text>
                    </FlexBox>
                    <FlexBox $gap="s_8" $align="center">
                      <Box
                        as={'button'}
                        $sx={css`
                          cursor: pointer;
                        `}
                      >
                        <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                          <PlusIcon />
                        </SvgImage>
                      </Box>
                      <Box
                        as={'button'}
                        $sx={css`
                          cursor: pointer;
                        `}
                      >
                        <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                          <PlusIcon />
                        </SvgImage>
                      </Box>
                    </FlexBox>
                  </FlexBox>
                </FlexBox>
              </FlexBox>
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
              <FlexBox
                $width="100%"
                $direction="column"
                $sx={({ theme }) => css`
                  border-radius: ${theme.radius.rounded_medium};
                  overflow: hidden;
                `}
              >
                <FlexBox
                  $direction="column"
                  $height="214px"
                  $width="100%"
                  $sx={css`
                    position: relative;
                  `}
                >
                  <Image
                    alt="card-image"
                    src={DefaultCardImage.src}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: 'cover',
                    }}
                    $sx={css`
                      width: 100%;
                      height: 100%;
                    `}
                  />
                </FlexBox>
                <FlexBox $direction="column" $width="100%" $padding="s_16" $gap="s_24" $backgroundColor="dark">
                  <FlexBox $direction="column" $gap="s_8">
                    <FlexBox $gap="s_8" $align="center">
                      <Text size="body_M" color="white" fontWeight="medium">
                        God of War Ragnarök
                      </Text>
                    </FlexBox>
                    <FlexBox $gap="s_4" $align="center">
                      <Text size="body_S" color="greySecondary">
                        Action
                      </Text>
                      <Text size="body_S" color="greySecondary">
                        Adventure
                      </Text>
                    </FlexBox>
                  </FlexBox>
                  <FlexBox $justify="space-between">
                    <FlexBox $gap="s_4" $align="center">
                      <SvgImage $height="16px" $width="16px" $fill="white">
                        <StarIcon />
                      </SvgImage>
                      <Text size="body_M" color="white">
                        1.0
                      </Text>
                    </FlexBox>
                    <FlexBox $gap="s_8" $align="center">
                      <Box
                        as={'button'}
                        $sx={css`
                          cursor: pointer;
                        `}
                      >
                        <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                          <PlusIcon />
                        </SvgImage>
                      </Box>
                      <Box
                        as={'button'}
                        $sx={css`
                          cursor: pointer;
                        `}
                      >
                        <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                          <PlusIcon />
                        </SvgImage>
                      </Box>
                    </FlexBox>
                  </FlexBox>
                </FlexBox>
              </FlexBox>
              <FlexBox
                $width="100%"
                $direction="column"
                $sx={({ theme }) => css`
                  border-radius: ${theme.radius.rounded_medium};
                  overflow: hidden;
                `}
              >
                <FlexBox
                  $direction="column"
                  $height="214px"
                  $width="100%"
                  $sx={css`
                    position: relative;
                  `}
                >
                  <Image
                    alt="card-image"
                    src={DefaultCardImage.src}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: 'cover',
                    }}
                    $sx={css`
                      width: 100%;
                      height: 100%;
                    `}
                  />
                </FlexBox>
                <FlexBox $direction="column" $width="100%" $padding="s_16" $gap="s_24" $backgroundColor="dark">
                  <FlexBox $direction="column" $gap="s_8">
                    <FlexBox $gap="s_8" $align="center">
                      <Text size="body_M" color="white" fontWeight="medium">
                        God of War Ragnarök
                      </Text>
                    </FlexBox>
                    <FlexBox $gap="s_4" $align="center">
                      <Text size="body_S" color="greySecondary">
                        Action
                      </Text>
                      <Text size="body_S" color="greySecondary">
                        Adventure
                      </Text>
                    </FlexBox>
                  </FlexBox>
                  <FlexBox $justify="space-between">
                    <FlexBox $gap="s_4" $align="center">
                      <SvgImage $height="16px" $width="16px" $fill="white">
                        <StarIcon />
                      </SvgImage>
                      <Text size="body_M" color="white">
                        1.0
                      </Text>
                    </FlexBox>
                    <FlexBox $gap="s_8" $align="center">
                      <Box
                        as={'button'}
                        $sx={css`
                          cursor: pointer;
                        `}
                      >
                        <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                          <PlusIcon />
                        </SvgImage>
                      </Box>
                      <Box
                        as={'button'}
                        $sx={css`
                          cursor: pointer;
                        `}
                      >
                        <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                          <PlusIcon />
                        </SvgImage>
                      </Box>
                    </FlexBox>
                  </FlexBox>
                </FlexBox>
              </FlexBox>
            </Grid>
          </FlexBox>
        </FlexBox>
      </Grid>
    </FlexBox>
  );
}
