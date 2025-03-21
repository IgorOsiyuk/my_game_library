'use client';
import Box from '@/atomic/Box';
import FlexBox from '@/atomic/FlexBox';
import Grid from '@/atomic/Grid';
import Image from '@/atomic/Image';
import SvgImage from '@/atomic/SvgImage';
import Text from '@/atomic/Text';
import StatusLabel, { StatusEnum } from '@/components/StatusLabel';
import PlusIcon from '@/icons/plus.svg';
import BoarIcon from '@/icons/wild-boar.svg';
import DefaultCardImage from '@/images/default_card_image.jpg';
import { css } from 'styled-components';

export default function Game() {
  return (
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
              <Image alt="card-image" src={DefaultCardImage.src} width={337} height={337} />
            </Box>
          </FlexBox>
          <FlexBox $gap="s_12">
            <Box
              as={'button'}
              $padding="s_12"
              $backgroundColor="dark"
              $sx={({ theme }) => css`
                border-radius: ${theme.radius.rounded_medium};
                overflow: hidden;
                cursor: pointer;
              `}
            >
              <SvgImage $height="20px" $width="20px" $fill="white">
                <PlusIcon />
              </SvgImage>
            </Box>
            <Box
              as={'button'}
              $padding="s_12"
              $backgroundColor="dark"
              $sx={({ theme }) => css`
                border-radius: ${theme.radius.rounded_medium};
                overflow: hidden;
                cursor: pointer;
              `}
            >
              <SvgImage $height="20px" $width="20px" $fill="white">
                <PlusIcon />
              </SvgImage>
            </Box>
          </FlexBox>
        </FlexBox>
        <Box>
          <FlexBox $direction="column" $gap="s_24" $width="auto" $align="flex-start">
            <StatusLabel label="Пройдено" variant={StatusEnum.INFO} />
            <FlexBox $direction="column" $gap="s_32">
              <Text size="title_L" color="white">
                God of War Ragnarök
              </Text>
              <Grid $columns="4fr 2fr" $gap="s_20">
                <FlexBox $direction="column" $gap="s_14">
                  <Grid $columns="1fr 3fr" $gap="s_20" $align="center">
                    <Text size="body_M" color="grey">
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
                          2021
                        </Text>
                      </Box>
                    </FlexBox>
                  </Grid>
                  <Grid $columns="1fr 3fr" $gap="s_20" $align="center">
                    <Text size="body_M" color="grey">
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
                    <Text size="body_M" color="grey">
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
                  </Grid>
                  <Grid $columns="1fr 3fr" $gap="s_20" $align="center">
                    <Text size="body_M" color="grey">
                      Платформы:
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
                          Mac
                        </Text>
                      </Box>
                    </FlexBox>
                  </Grid>
                  <Grid $columns="1fr 3fr" $gap="s_20" $align="center">
                    <Text size="body_M" color="grey">
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
                          Action
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
                          Adventure
                        </Text>
                      </Box>
                    </FlexBox>
                  </Grid>
                </FlexBox>
                <FlexBox $direction="column" $gap="s_14">
                  <Text size="body_M" color="grey">
                    Время прохождения: 32ч
                  </Text>
                  <Text size="body_M" color="grey">
                    Сложность: легкая
                  </Text>
                  <Text size="body_M" color="grey">
                    Трофеи: 5 из 20
                  </Text>
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
                The Lich King Arthas has set in motion events that could lead to the extinction of all life on Azeroth.
                With the armies of the undead and the necromantic power of the plague threatening to sweep across the
                land, only the mightiest heroes can oppose the Lich King&lsquo;s will and end his reign of terror for
                all time. Learn the craft of spell augmentation with the new Inscription profession. Brave the harsh new
                continent of Northrend, the icy domain of the Lich King. Engage in epic siege warfare, deploying mighty
                siege engines to lay waste to destructible buildings in your path. Transform your hero&apos;s look with
                new character-customization options, including new hairstyles and dances. Explore perilous new dungeons
                filled with some of the deadliest creatures -- and greatest treasures.
              </Text>
            </FlexBox>
            <FlexBox $direction="column" $gap="s_14">
              <Text size="body_M" color="white" fontWeight="bold">
                Отзыв
              </Text>
              <Text size="body_M" color="white" fontWeight="light">
                The Lich King Arthas has set in motion events that could lead to the extinction of all life on Azeroth.
                With the armies of the undead and the necromantic power of the plague threatening to sweep across the
                land, only the mightiest heroes can oppose the Lich King&apos;s will and end his reign of terror for all
                time.
              </Text>
            </FlexBox>
          </FlexBox>
        </Box>
      </FlexBox>
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
          <Text size="body_M" color="grey">
            Оценка игры
          </Text>
          <FlexBox $gap="s_8" $wrap="nowrap">
            <Text size="title_L" color="yellow" fontWeight="bold">
              1.0
            </Text>
            <SvgImage $height="52px" $width="52px">
              <BoarIcon />
            </SvgImage>
          </FlexBox>
        </FlexBox>
        <FlexBox $direction="column" $gap="s_12">
          <Text size="body_M" color="grey">
            Сюжет
          </Text>
          <FlexBox $gap="s_8" $wrap="nowrap">
            <Text size="title_L" color="yellow" fontWeight="bold">
              1.0
            </Text>
            <SvgImage $height="52px" $width="52px">
              <BoarIcon />
            </SvgImage>
          </FlexBox>
        </FlexBox>
        <FlexBox $direction="column" $gap="s_12">
          <Text size="body_M" color="grey">
            Art
          </Text>
          <FlexBox $gap="s_8" $wrap="nowrap">
            <Text size="title_L" color="yellow" fontWeight="bold">
              1.0
            </Text>
            <SvgImage $height="52px" $width="52px">
              <BoarIcon />
            </SvgImage>
          </FlexBox>
        </FlexBox>
        <FlexBox $direction="column" $gap="s_12">
          <Text size="body_M" color="grey">
            Геймплей
          </Text>
          <FlexBox $gap="s_8" $wrap="nowrap">
            <Text size="title_L" color="yellow" fontWeight="bold">
              1.0
            </Text>
            <SvgImage $height="52px" $width="52px">
              <BoarIcon />
            </SvgImage>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
