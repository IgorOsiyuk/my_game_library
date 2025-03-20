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
            color="grey"
            spacing="s_14"
            onClick={(e) => {
              e.preventDefault();
            }}
            icon={
              <SvgImage $height="20px" $width="20px" $fill="white">
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
                  <Text size="body_S" color="grey">
                    26h
                  </Text>
                </FlexBox>
                <FlexBox $gap="s_4" $align="center">
                  <Text size="body_S" color="grey">
                    Action
                  </Text>
                  <Text size="body_S" color="grey">
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
                    <SvgImage $height="16px" $width="16px" $fill="grey">
                      <PlusIcon />
                    </SvgImage>
                  </Box>
                  <Box
                    as={'button'}
                    $sx={css`
                      cursor: pointer;
                    `}
                  >
                    <SvgImage $height="16px" $width="16px" $fill="grey">
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
                  <Text size="body_S" color="grey">
                    26h
                  </Text>
                </FlexBox>
                <FlexBox $gap="s_4" $align="center">
                  <Text size="body_S" color="grey">
                    Action
                  </Text>
                  <Text size="body_S" color="grey">
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
                    <SvgImage $height="16px" $width="16px" $fill="grey">
                      <PlusIcon />
                    </SvgImage>
                  </Box>
                  <Box
                    as={'button'}
                    $sx={css`
                      cursor: pointer;
                    `}
                  >
                    <SvgImage $height="16px" $width="16px" $fill="grey">
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
                  <Text size="body_S" color="grey">
                    26h
                  </Text>
                </FlexBox>
                <FlexBox $gap="s_4" $align="center">
                  <Text size="body_S" color="grey">
                    Action
                  </Text>
                  <Text size="body_S" color="grey">
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
                    <SvgImage $height="16px" $width="16px" $fill="grey">
                      <PlusIcon />
                    </SvgImage>
                  </Box>
                  <Box
                    as={'button'}
                    $sx={css`
                      cursor: pointer;
                    `}
                  >
                    <SvgImage $height="16px" $width="16px" $fill="grey">
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
                  <Text size="body_S" color="grey">
                    26h
                  </Text>
                </FlexBox>
                <FlexBox $gap="s_4" $align="center">
                  <Text size="body_S" color="grey">
                    Action
                  </Text>
                  <Text size="body_S" color="grey">
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
                    <SvgImage $height="16px" $width="16px" $fill="grey">
                      <PlusIcon />
                    </SvgImage>
                  </Box>
                  <Box
                    as={'button'}
                    $sx={css`
                      cursor: pointer;
                    `}
                  >
                    <SvgImage $height="16px" $width="16px" $fill="grey">
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
                  <Text size="body_S" color="grey">
                    26h
                  </Text>
                </FlexBox>
                <FlexBox $gap="s_4" $align="center">
                  <Text size="body_S" color="grey">
                    Action
                  </Text>
                  <Text size="body_S" color="grey">
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
                    <SvgImage $height="16px" $width="16px" $fill="grey">
                      <PlusIcon />
                    </SvgImage>
                  </Box>
                  <Box
                    as={'button'}
                    $sx={css`
                      cursor: pointer;
                    `}
                  >
                    <SvgImage $height="16px" $width="16px" $fill="grey">
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
                  <Text size="body_S" color="grey">
                    26h
                  </Text>
                </FlexBox>
                <FlexBox $gap="s_4" $align="center">
                  <Text size="body_S" color="grey">
                    Action
                  </Text>
                  <Text size="body_S" color="grey">
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
                    <SvgImage $height="16px" $width="16px" $fill="grey">
                      <PlusIcon />
                    </SvgImage>
                  </Box>
                  <Box
                    as={'button'}
                    $sx={css`
                      cursor: pointer;
                    `}
                  >
                    <SvgImage $height="16px" $width="16px" $fill="grey">
                      <PlusIcon />
                    </SvgImage>
                  </Box>
                </FlexBox>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </Grid>
      </FlexBox>
      {/* <div className="mt-8">
        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-2">
            <StatItem title={'Игр в библиотеке:'} count={20} icon={<FunSmile />} />
          </div>
          <div className="col-span-2">
            <StatItem title={'Пройдено игр:'} count={20} icon={<DoneSmile />} />
          </div>
          <div className="col-span-2">
            <StatItem title={'Играю в:'} count={20} icon={<PlaySmile />} />
          </div>
          <div className="col-span-2">
            <StatItem title={'Заброшено игр:'} count={20} icon={<SadSmile />} />
          </div>
        </div>
      </div>
      <Slider />
      <GameList /> */}
    </FlexBox>
  );
}
