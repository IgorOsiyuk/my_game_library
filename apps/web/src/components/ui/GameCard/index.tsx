import Box from '@/atomic/Box';
import FlexBox from '@/atomic/FlexBox';
import Image from '@/atomic/Image';
import SvgImage from '@/atomic/SvgImage';
import Text from '@/atomic/Text';
import StatusLabel, { StatusEnum } from '@/components/StatusLabel';
import HeartIcon from '@/icons/heart.svg';
import InfoIcon from '@/icons/info.svg';
import StarIcon from '@/icons/star.svg';
import { css } from 'styled-components';

interface GameCardIProps {
  title: string;
  playTime?: string;
  genres: string[];
  rating: string;
  status?: StatusEnum;
  image: string;
  isLarge?: boolean;
}

const GameCard = ({ title, playTime, genres, rating, status, image, isLarge = false }: GameCardIProps) => {
  return (
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
        $height={isLarge ? '445px' : '214px'}
        $width="100%"
        $sx={css`
          position: relative;
        `}
      >
        {status && (
          <Box
            $padding={'s_12'}
            $sx={css`
              position: absolute;
              z-index: 1;
              right: 0;
            `}
          >
            <StatusLabel label="Пройдено" variant={status} />
          </Box>
        )}
        <Image
          alt="card-image"
          src={image}
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
          <FlexBox $gap="s_8" $align="center" $justify="space-between">
            <Text size="body_M" color="white" fontWeight="medium">
              {title}
            </Text>
            {playTime && (
              <Text size="body_S" color="greySecondary">
                {playTime}
              </Text>
            )}
          </FlexBox>
          <FlexBox $gap="s_4" $align="center">
            {genres.map((genre, index) => (
              <Text key={index} size="body_S" color="greySecondary">
                {genre}
              </Text>
            ))}
          </FlexBox>
        </FlexBox>
        <FlexBox $justify="space-between">
          <FlexBox $gap="s_4" $align="center">
            <SvgImage $height="16px" $width="16px" $fill="white">
              <StarIcon />
            </SvgImage>
            <Text size="body_M" color="white">
              {rating}
            </Text>
          </FlexBox>
          <FlexBox $gap="s_8" $align="center">
            <Box
              as={'button'}
              $sx={({ theme }) => css`
                cursor: pointer;
                &:hover {
                  svg {
                    path {
                      fill: ${theme.colors.red};
                      transition: fill 0.3s ease;
                    }
                  }
                }
              `}
            >
              <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                <HeartIcon />
              </SvgImage>
            </Box>
            <Box
              as={'button'}
              $sx={({ theme }) => css`
                cursor: pointer;
                border-radius: 4px;
                overflow: hidden;
                &:hover {
                  background-color: ${theme.colors.grey};
                  transition: background-color 0.3s ease;
                }
              `}
            >
              <SvgImage $height="16px" $width="16px" $fill="greySecondary">
                <InfoIcon />
              </SvgImage>
            </Box>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default GameCard;
