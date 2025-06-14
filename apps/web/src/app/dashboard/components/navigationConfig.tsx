import GameIcon from '@/icons/game.svg';
import LibraryIcon from '@/icons/library.svg';
import ProfileIcon from '@/icons/profile.svg';

export const mainNavigationItems = [
  {
    href: '/dashboard',
    label: 'Моя библиотека',
    icon: <LibraryIcon />,
  },
  {
    href: '/dashboard/games',
    label: 'Игры',
    icon: <GameIcon />,
  },
  {
    href: '/dashboard/user',
    label: 'Аккаунт',
    icon: <ProfileIcon />,
  },
];
