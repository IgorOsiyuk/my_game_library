import Box from '@/atomic/Box';
import Button from '@/atomic/Button';
import FlexBox from '@/atomic/FlexBox';
import { css, keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
`;

// Стиль для пульсирующих элементов
const pulseStyle = css`
  button {
    animation: ${pulseAnimation} 1.5s ease-in-out infinite;
  }
`;

const SkeletonFilterOptions = () => {
  return (
    <FlexBox $gap="s_12" $justify="flex-start" $sx={pulseStyle}>
      <Button textSize="body_M" color={'darkSecondary'} spacing="s_12">
        <Box $width="120px" $backgroundColor="darkSecondary" $radius="rounded_medium" />
      </Button>
      <Button textSize="body_M" color={'darkSecondary'} spacing="s_12">
        <Box $width="120px" $backgroundColor="darkSecondary" $radius="rounded_medium" />
      </Button>
      <Button textSize="body_M" color={'darkSecondary'} spacing="s_12">
        <Box $width="120px" $backgroundColor="darkSecondary" $radius="rounded_medium" />
      </Button>
      <Button textSize="body_M" color={'darkSecondary'} spacing="s_12">
        <Box $width="120px" $backgroundColor="darkSecondary" $radius="rounded_medium" />
      </Button>
    </FlexBox>
  );
};

export default SkeletonFilterOptions;
