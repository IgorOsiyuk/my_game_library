import Box from '@/atomic/Box';
import FlexBox from '@/atomic/FlexBox';
import { Slider } from '@/atomic/Slider';
import Text from '@/atomic/Text';
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

const getEmojiForValue = (value: number, max: number): string => {
  const percentage = value / max;
  if (percentage <= 0.2) return '😡';
  if (percentage <= 0.4) return '😤';
  if (percentage <= 0.6) return '😐';
  if (percentage <= 0.8) return '🙂';
  return '😊';
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
                {value.toFixed(1)}
              </Text>
            </Box>
            {showEmoji && <Text size="body_M">{getEmojiForValue(value, max)}</Text>}
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
