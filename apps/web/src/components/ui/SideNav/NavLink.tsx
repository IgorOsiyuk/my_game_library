import Box from '@/atomic/Box';
import FlexBox from '@/atomic/FlexBox';
import SvgImage from '@/atomic/SvgImage';
import Link from 'next/link';
import { css } from 'styled-components';
import Text from '../Text';

interface NavLinkIProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

const NavLink = ({ href, label, icon, isActive = false }: NavLinkIProps) => {
  return (
    <Link href={href} passHref>
      <Box
        $px={'s_8'}
        $py={'s_12'}
        $radius={'rounded_medium'}
        {...(isActive && {
          $backgroundColor: 'grey',
        })}
        $sx={({ theme }) => css`
          &:hover {
            background-color: ${theme.colors.grey.dark};
          }
          transition: all 0.25s;
        `}
      >
        <FlexBox $align="center" $gap="s_12">
          {icon && (
            <SvgImage $height="20px" $width="20px">
              {icon}
            </SvgImage>
          )}
          <Text color="white" size="body_S">
            {label}
          </Text>
        </FlexBox>
      </Box>
    </Link>
  );
};

export default NavLink;
