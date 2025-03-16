import Box from '@/atomic/Box';
import FlexBox from '@/atomic/FlexBox';
import SvgImage from '@/atomic/SvgImage';
import { css } from 'styled-components';
import Text from '../Text';

interface SignOutIProps {
  label: string;
  icon: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SignOut = ({ label, icon, onClick }: SignOutIProps) => {
  return (
    <Box
      as="button"
      onClick={onClick}
      $px={'s_8'}
      $py={'s_12'}
      $sx={({ theme }) => css`
        cursor: pointer;
        &:hover * {
          color: ${theme.colors.white.dark};
          fill: ${theme.colors.white.dark};
          transition: all 0.25s;
        }
      `}
    >
      <FlexBox $align="center" $gap="s_12">
        <SvgImage $height="20px" $width="20px" $fill="grey">
          {icon}
        </SvgImage>

        <Text color="grey" size="body_S">
          {label}
        </Text>
      </FlexBox>
    </Box>
  );
};

export default SignOut;
