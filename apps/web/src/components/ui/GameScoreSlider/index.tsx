import Box from '@/atomic/Box';
import FlexBox from '@/atomic/FlexBox';
import Image from '@/atomic/Image';
import { Slider } from '@/atomic/Slider';
import Text from '@/atomic/Text';
import Rating0Img from '@/images/rating-0.png';
import Rating1Img from '@/images/rating-1.png';
import Rating2Img from '@/images/rating-2.png';
import Rating3Img from '@/images/rating-3.png';
import Rating4Img from '@/images/rating-4.png';
import { StaticImageData } from 'next/image';
import { UseFormRegisterReturn } from 'react-hook-form';
import { css } from 'styled-components';
interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  register: UseFormRegisterReturn<string>;
  showEmoji?: boolean;
  label?: string;
  className?: string;
  value?: number;
}

const getEmojiForValue = (value: number): StaticImageData => {
  if (value <= 1) return Rating0Img;
  if (value <= 2) return Rating1Img;
  if (value <= 3) return Rating2Img;
  if (value <= 4) return Rating3Img;
  return Rating4Img;
};

const GameScoreSlider = ({
  min = 0,
  max = 5,
  step = 0.1,
  defaultValue = 0,
  register,
  showEmoji = true,
  label,
  value = 0,
}: SliderProps) => {
  return (
    <Box
      $width="100%"
      $height="100%"
      $px="s_12"
      $pt="s_18"
      $pb="s_32"
      $radius="rounded_medium"
      $sx={css`
        border: 1px solid ${({ theme }) => theme.colors.grey};
      `}
    >
      {(label || showEmoji) && (
        <FlexBox $justify="space-between" $align="flex-start" $direction="column" $gap="s_28">
          {label && (
            <Text color="white" size="body_M">
              {label}
            </Text>
          )}
          <FlexBox $gap="s_8" $align="center">
            <Box
              $sx={css`
                min-width: 50px;
              `}
            >
              <Text color="accent2" size="big_numbers" fontWeight="medium">
                {value}
              </Text>
            </Box>
            {showEmoji && (
              <Image
                alt="rating-image"
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                }}
                $sx={css`
                  width: 70px;
                  height: 70px;
                  pointer-events: none;
                `}
                src={getEmojiForValue(value)}
              />
            )}
          </FlexBox>
        </FlexBox>
      )}
      <Box $width="100%" $mt="s_16">
        <Slider min={min} max={max} step={step} defaultValue={defaultValue} register={register} value={value} />
      </Box>
    </Box>
  );
};

export default GameScoreSlider;
