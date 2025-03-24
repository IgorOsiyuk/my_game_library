'use client';

import Box from '@/atomic/Box';
import Button from '@/atomic/Button';
import FlexBox from '@/atomic/FlexBox';
import Image from '@/atomic/Image';
import SvgImage from '@/atomic/SvgImage';
import Text from '@/atomic/Text';
import FilterOptions from '@/components/FilterOptions';
import StatusLabel, { StatusEnum } from '@/components/StatusLabel';
import ViewOptions from '@/components/ViewOptions';
import PlusIcon from '@/icons/plus.svg';
import StarIcon from '@/icons/star.svg';

import Grid from '@/atomic/Grid';
import SearchIcon from '@/icons/search.svg';
import DefaultCardImage from '@/images/default_card_image.jpg';
import { css } from 'styled-components';

export default function Dashboard() {
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
          >
            Добавить игру
          </Button>
        </FlexBox>
      </FlexBox>
      <FlexBox $direction="column" $gap="s_32">
        <FlexBox $justify="space-between">
          <FilterOptions />
          <ViewOptions />
        </FlexBox>
        <Grid $width="100%" $gap="s_24" $columns="repeat(5,1fr)">
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
              <Box
                $padding={'s_12'}
                $sx={css`
                  position: absolute;
                  z-index: 1;
                  right: 0;
                `}
              >
                <StatusLabel label="Пройдено" variant={StatusEnum.SUCCESS} />
              </Box>
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
                  <Text size="body_S" color="greySecondary">
                    26h
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
              <Box
                $padding={'s_12'}
                $sx={css`
                  position: absolute;
                  z-index: 1;
                  right: 0;
                `}
              >
                <StatusLabel label="Пройдено" variant={StatusEnum.SUCCESS} />
              </Box>
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
                  <Text size="body_S" color="greySecondary">
                    26h
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
              <Box
                $padding={'s_12'}
                $sx={css`
                  position: absolute;
                  z-index: 1;
                  right: 0;
                `}
              >
                <StatusLabel label="Пройдено" variant={StatusEnum.SUCCESS} />
              </Box>
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
                  <Text size="body_S" color="greySecondary">
                    26h
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
              <Box
                $padding={'s_12'}
                $sx={css`
                  position: absolute;
                  z-index: 1;
                  right: 0;
                `}
              >
                <StatusLabel label="Пройдено" variant={StatusEnum.SUCCESS} />
              </Box>
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
                  <Text size="body_S" color="greySecondary">
                    26h
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
              <Box
                $padding={'s_12'}
                $sx={css`
                  position: absolute;
                  z-index: 1;
                  right: 0;
                `}
              >
                <StatusLabel label="Пройдено" variant={StatusEnum.SUCCESS} />
              </Box>
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
                  <Text size="body_S" color="greySecondary">
                    26h
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
        <FlexBox $gap="s_8" $wrap="wrap">
          <Grid
            $columns="341px 1fr 1fr 1fr 1fr 1fr 2fr 1fr"
            $align="center"
            $padding="s_8"
            $width="100%"
            $backgroundColor="dark"
            $sx={({ theme }) => css`
              border-radius: ${theme.radius.rounded_medium};
              overflow: hidden;
            `}
          >
            <FlexBox $gap="s_12" $align="center">
              <FlexBox
                $direction="column"
                $height="54px"
                $width="54px"
                $sx={({ theme }) => css`
                  border-radius: ${theme.radius.rounded_medium};
                  overflow: hidden;
                `}
              >
                <Image alt="card-image" src={DefaultCardImage.src} width={54} height={54} />
              </FlexBox>
              <FlexBox $gap="s_8" $align="flex-start" $direction="column">
                <Text size="body_M" color="white" fontWeight="medium">
                  God of War Ragnarök
                </Text>
                <FlexBox $gap="s_4" $align="center">
                  <Text size="body_S" color="greySecondary">
                    Action
                  </Text>
                  <Text size="body_S" color="greySecondary">
                    Adventure
                  </Text>
                </FlexBox>
              </FlexBox>
            </FlexBox>

            <FlexBox $gap="s_4" $align="center">
              <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                <StarIcon />
              </SvgImage>
              <Text size="body_M" color="white">
                4.9
              </Text>
            </FlexBox>
            <Box>
              <Text size="body_M" color="white">
                Playstation
              </Text>
            </Box>
            <Box>
              <Text size="body_M" color="white">
                Esprit Games
              </Text>
            </Box>
            <Box>
              <Text size="body_M" color="greySecondary">
                45h played
              </Text>
            </Box>
            <FlexBox $gap="s_4" $align="center">
              <Text size="body_M" color="greySecondary">
                Action
              </Text>
              <Text size="body_M" color="greySecondary">
                Adventure
              </Text>
            </FlexBox>
            <Box />
            <FlexBox $gap="s_20" $align="center" $justify="flex-end">
              <StatusLabel label="Пройдено" variant={StatusEnum.SUCCESS} />
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
          </Grid>
          <Grid
            $columns="341px 1fr 1fr 1fr 1fr 1fr 2fr 1fr"
            $align="center"
            $padding="s_8"
            $width="100%"
            $backgroundColor="dark"
            $sx={({ theme }) => css`
              border-radius: ${theme.radius.rounded_medium};
              overflow: hidden;
            `}
          >
            <FlexBox $gap="s_12" $align="center">
              <FlexBox
                $direction="column"
                $height="54px"
                $width="54px"
                $sx={({ theme }) => css`
                  border-radius: ${theme.radius.rounded_medium};
                  overflow: hidden;
                `}
              >
                <Image alt="card-image" src={DefaultCardImage.src} width={54} height={54} />
              </FlexBox>
              <FlexBox $gap="s_8" $align="flex-start" $direction="column">
                <Text size="body_M" color="white" fontWeight="medium">
                  God of War Ragnarök
                </Text>
                <FlexBox $gap="s_4" $align="center">
                  <Text size="body_S" color="greySecondary">
                    Action
                  </Text>
                  <Text size="body_S" color="greySecondary">
                    Adventure
                  </Text>
                </FlexBox>
              </FlexBox>
            </FlexBox>

            <FlexBox $gap="s_4" $align="center">
              <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                <StarIcon />
              </SvgImage>
              <Text size="body_M" color="white">
                4.9
              </Text>
            </FlexBox>
            <Box>
              <Text size="body_M" color="white">
                Playstation
              </Text>
            </Box>
            <Box>
              <Text size="body_M" color="white">
                Esprit Games
              </Text>
            </Box>
            <Box>
              <Text size="body_M" color="greySecondary">
                45h played
              </Text>
            </Box>
            <FlexBox $gap="s_4" $align="center">
              <Text size="body_M" color="greySecondary">
                Action
              </Text>
              <Text size="body_M" color="greySecondary">
                Adventure
              </Text>
            </FlexBox>
            <Box />
            <FlexBox $gap="s_20" $align="center" $justify="flex-end">
              <StatusLabel label="Пройдено" variant={StatusEnum.SUCCESS} />
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
          </Grid>
          <Grid
            $columns="341px 1fr 1fr 1fr 1fr 1fr 2fr 1fr"
            $align="center"
            $padding="s_8"
            $width="100%"
            $backgroundColor="dark"
            $sx={({ theme }) => css`
              border-radius: ${theme.radius.rounded_medium};
              overflow: hidden;
            `}
          >
            <FlexBox $gap="s_12" $align="center">
              <FlexBox
                $direction="column"
                $height="54px"
                $width="54px"
                $sx={({ theme }) => css`
                  border-radius: ${theme.radius.rounded_medium};
                  overflow: hidden;
                `}
              >
                <Image alt="card-image" src={DefaultCardImage.src} width={54} height={54} />
              </FlexBox>
              <FlexBox $gap="s_8" $align="flex-start" $direction="column">
                <Text size="body_M" color="white" fontWeight="medium">
                  God of War Ragnarök
                </Text>
                <FlexBox $gap="s_4" $align="center">
                  <Text size="body_S" color="greySecondary">
                    Action
                  </Text>
                  <Text size="body_S" color="greySecondary">
                    Adventure
                  </Text>
                </FlexBox>
              </FlexBox>
            </FlexBox>

            <FlexBox $gap="s_4" $align="center">
              <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                <StarIcon />
              </SvgImage>
              <Text size="body_M" color="white">
                4.9
              </Text>
            </FlexBox>
            <Box>
              <Text size="body_M" color="white">
                Playstation
              </Text>
            </Box>
            <Box>
              <Text size="body_M" color="white">
                Esprit Games
              </Text>
            </Box>
            <Box>
              <Text size="body_M" color="greySecondary">
                45h played
              </Text>
            </Box>
            <FlexBox $gap="s_4" $align="center">
              <Text size="body_M" color="greySecondary">
                Action
              </Text>
              <Text size="body_M" color="greySecondary">
                Adventure
              </Text>
            </FlexBox>
            <Box />
            <FlexBox $gap="s_20" $align="center" $justify="flex-end">
              <StatusLabel label="Пройдено" variant={StatusEnum.SUCCESS} />
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
          </Grid>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
