import Box from '@/atomic/Box';
import FlexBox from '@/atomic/FlexBox';
import Image from '@/atomic/Image';
import ProfileIcon from '@/icons/profile.svg';
import DefaultProfileImage from '@/images/default_profile_image.jpg';
import { css } from 'styled-components';
import Text from '../../atomic/Text';
import NavLink from './NavLink';
import SignOut from './SignOut';

export type NavigationItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
};
interface SideNavIProps {
  signOutHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  mainNavigationItems: NavigationItem[];
  bottomNavigationItems: NavigationItem[];
}

const SideNav = ({ signOutHandler, mainNavigationItems, bottomNavigationItems }: SideNavIProps) => {
  return (
    <Box $radius={'rounded_medium'} $height={'100%'} $backgroundColor={'dark'} $px={'s_8'} $py={'s_24'}>
      <FlexBox $direction="column" $justify="space-between" $height="100%">
        <FlexBox $direction="column" $gap="s_32">
          <FlexBox $gap="s_12" $align="center" $px="s_8">
            <Box
              $height="40px"
              $width="40px"
              $sx={css`
                border-radius: 50%;
                overflow: hidden;
              `}
            >
              <Image alt="profile-image" {...DefaultProfileImage} height={40} width={40} />
            </Box>
            <Text color="white" size="body_S">
              Igor Osiyuk
            </Text>
          </FlexBox>
          <FlexBox $direction="column" $gap="s_4">
            {mainNavigationItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} icon={item.icon} isActive={item.isActive} />
            ))}
          </FlexBox>
        </FlexBox>
        <FlexBox $direction="column">
          {bottomNavigationItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} icon={item.icon} isActive={item.isActive} />
          ))}
          <SignOut label={'Выйти'} icon={<ProfileIcon />} onClick={signOutHandler} />
        </FlexBox>
      </FlexBox>
    </Box>
  );
};
export default SideNav;
