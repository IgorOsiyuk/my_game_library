'use client';
import Box from '@/atomic/Box';
import FlexBox from '@/atomic/FlexBox';
import Grid from '@/atomic/Grid';
import Image from '@/atomic/Image';
import SvgImage from '@/atomic/SvgImage';
import Text from '@/atomic/Text';
import ArrowIcon from '@/icons/arrow.svg';
import DefaultCardImage from '@/images/default_card_image.jpg';
import { useRouter } from 'next/navigation';
import { css } from 'styled-components';
import 'swiper/css';

export default function Game() {
  const router = useRouter();

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

          <Box>
            <FlexBox $direction="column" $gap="s_24" $width="auto" $align="flex-start">
              <FlexBox $direction="column" $gap="s_32">
                <Text size="title_L" color="white">
                  God of War Ragnarök
                </Text>

                <FlexBox $direction="column" $gap="s_14">
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
                          2021
                        </Text>
                      </Box>
                    </FlexBox>
                  </Grid>
                  <Grid $columns="1fr 3fr" $gap="s_20" $align="center">
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
                  </Grid>
                  <Grid $columns="1fr 3fr" $gap="s_20" $align="center">
                    <Text size="body_M" color="greySecondary">
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
              </FlexBox>
            </FlexBox>
            <FlexBox $direction="column" $mt="s_56" $gap="s_32">
              <FlexBox $direction="column" $gap="s_14">
                <Text size="body_M" color="white" fontWeight="bold">
                  Сюжет
                </Text>
                <Text size="body_M" color="white" fontWeight="light">
                  The Lich King Arthas has set in motion events that could lead to the extinction of all life on
                  Azeroth. With the armies of the undead and the necromantic power of the plague threatening to sweep
                  across the land, only the mightiest heroes can oppose the Lich King&lsquo;s will and end his reign of
                  terror for all time. Learn the craft of spell augmentation with the new Inscription profession. Brave
                  the harsh new continent of Northrend, the icy domain of the Lich King. Engage in epic siege warfare,
                  deploying mighty siege engines to lay waste to destructible buildings in your path. Transform your
                  hero&apos;s look with new character-customization options, including new hairstyles and dances.
                  Explore perilous new dungeons filled with some of the deadliest creatures -- and greatest treasures.
                </Text>
              </FlexBox>
            </FlexBox>
            <FlexBox $direction="column" $gap="s_40" $mt="s_56" $width="100%">
              <FlexBox $width="100%" $direction="column" $gap="s_14">
                <Text size="body_M" color="white" fontWeight="bold">
                  Скриншоты
                </Text>
                <FlexBox $gap="s_14">
                  <Image
                    alt="screenshot"
                    src={DefaultCardImage.src}
                    $sx={({ theme }) => css`
                      width: max-content;
                      border-radius: ${theme.radius.rounded_medium};
                      overflow: hidden;
                    `}
                    width={331}
                    height={216}
                  />
                  <Image
                    alt="screenshot"
                    src={DefaultCardImage.src}
                    $sx={({ theme }) => css`
                      width: max-content;
                      border-radius: ${theme.radius.rounded_medium};
                      overflow: hidden;
                    `}
                    width={331}
                    height={216}
                  />
                  <Image
                    alt="screenshot"
                    src={DefaultCardImage.src}
                    $sx={({ theme }) => css`
                      width: max-content;
                      border-radius: ${theme.radius.rounded_medium};
                      overflow: hidden;
                    `}
                    width={331}
                    height={216}
                  />
                </FlexBox>
              </FlexBox>
              <FlexBox $width="100%" $direction="column" $gap="s_14">
                <Text size="body_M" color="white" fontWeight="bold">
                  Видео
                </Text>
                <Box></Box>
              </FlexBox>
            </FlexBox>
          </Box>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
