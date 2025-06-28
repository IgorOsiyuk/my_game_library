import Box from '@/atomic/Box';
import FlexBox from '@/atomic/FlexBox';
import Grid from '@/atomic/Grid';
import Image from '@/atomic/Image';
import SvgImage from '@/atomic/SvgImage';
import Text from '@/atomic/Text';
import StarIcon from '@/icons/star.svg';
import { GameStatusVariantMap } from '@/lib/utils';
import { GameStatus } from '@/types/game';
import StatusLabel from '@/ui/StatusLabel';
import { useRouter } from 'next/navigation';
import { css } from 'styled-components';

interface GameCardTileProps {
  id: string;
  title: string;
  playTime: string;
  genres: string;
  rating: number;
  status: GameStatus;
  image: string;
  platforms: string;
}

const GameCardTile = ({ id, title, playTime, genres, rating, status, image, platforms }: GameCardTileProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/dashboard/review/${id}`);
  };
  return (
    <Grid
      $columns="341px 1fr 1fr 1fr 1fr 2fr 1fr"
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
          <Image alt="card-image" src={image} width={54} height={54} sizes="30vw" onClick={handleClick} />
        </FlexBox>
        <FlexBox $gap="s_8" $align="flex-start" $direction="column">
          <Box
            onClick={handleClick}
            as={'button'}
            $sx={({ theme }) => css`
              * {
                cursor: pointer;
                text-decoration: underline;
                text-decoration-color: transparent;
                &:hover {
                  text-decoration-color: ${theme.colors.white};
                  transition: text-decoration-color 0.3s ease;
                }
              }
            `}
          >
            <Text size="body_M" color="white" fontWeight="medium">
              {title}
            </Text>
          </Box>
          <FlexBox $gap="s_4" $align="center">
            <Text size="body_S" color="greySecondary">
              {genres}
            </Text>
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
          {platforms}
        </Text>
      </Box>
      <Box>
        <Text size="body_M" color="greySecondary">
          {`${playTime}ч. наиграно`}
        </Text>
      </Box>
      <FlexBox $gap="s_4" $align="center" $wrap="wrap">
        <Text size="body_M" color="greySecondary">
          {genres}
        </Text>
      </FlexBox>
      <Box />
      <FlexBox $gap="s_20" $align="center" $justify="flex-end">
        {status && <StatusLabel label={status} variant={GameStatusVariantMap[status]} />}
      </FlexBox>
    </Grid>
  );
};

export default GameCardTile;
