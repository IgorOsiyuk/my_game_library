import Box from '@/atomic/Box';
import FlexBox from '@/atomic/FlexBox';
import Grid from '@/atomic/Grid';
import Image from '@/atomic/Image';
import SvgImage from '@/atomic/SvgImage';
import Text from '@/atomic/Text';
import StatusLabel, { StatusEnum } from '@/components/StatusLabel';
import InfoIcon from '@/icons/info.svg';
import StarIcon from '@/icons/star.svg';
import { css } from 'styled-components';

interface GameCardTileProps {
  title: string;
  playTime: string;
  genres: string[];
  rating: string;
  status?: StatusEnum;
  image: string;
  platform: string;
  developer: string;
}

const GameCardTile = ({ title, playTime, genres, rating, status, image, platform, developer }: GameCardTileProps) => {
  return (
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
          <Image alt="card-image" src={image} width={54} height={54} />
        </FlexBox>
        <FlexBox $gap="s_8" $align="flex-start" $direction="column">
          <Text size="body_M" color="white" fontWeight="medium">
            {title}
          </Text>
          <FlexBox $gap="s_4" $align="center">
            {genres.map((genre, index) => (
              <Text key={index} size="body_S" color="greySecondary">
                {genre}
              </Text>
            ))}
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <FlexBox $gap="s_4" $align="center">
        <SvgImage $height="16px" $width="16px" $fill="greySecondary">
          <StarIcon />
        </SvgImage>
        <Text size="body_M" color="white">
          {rating}
        </Text>
      </FlexBox>
      <Box>
        <Text size="body_M" color="white">
          {platform}
        </Text>
      </Box>
      <Box>
        <Text size="body_M" color="white">
          {developer}
        </Text>
      </Box>
      <Box>
        <Text size="body_M" color="greySecondary">
          {`${playTime} played`}
        </Text>
      </Box>
      <FlexBox $gap="s_4" $align="center" $wrap="wrap">
        {genres.map((genre, index) => (
          <Text key={index} size="body_M" color="greySecondary">
            {genre}
          </Text>
        ))}
      </FlexBox>
      <Box />
      <FlexBox $gap="s_20" $align="center" $justify="flex-end">
        {status && <StatusLabel label="Пройдено" variant={status} />}
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
    </Grid>
  );
};

export default GameCardTile;
