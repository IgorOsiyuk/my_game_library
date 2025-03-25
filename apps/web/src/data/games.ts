import { StatusEnum } from '@/components/StatusLabel';

export interface Game {
  id: string;
  title: string;
  playTime: string;
  genres: string[];
  rating: string;
  status?: StatusEnum;
  image: string;
  platform: string;
  developer: string;
}

export const games: Game[] = [
  {
    id: '1',
    title: 'God of War Ragnarök',
    playTime: '26h',
    genres: ['Action', 'Adventure'],
    rating: '4.9',
    status: StatusEnum.SUCCESS,
    image: '/images/default_card_image.jpg',
    platform: 'Playstation',
    developer: 'Santa Monica Studio',
  },
  {
    id: '2',
    title: 'The Last of Us Part II',
    playTime: '32h',
    genres: ['Action', 'Survival'],
    rating: '4.8',
    status: StatusEnum.SUCCESS,
    image: '/images/default_card_image.jpg',
    platform: 'Playstation',
    developer: 'Naughty Dog',
  },
  {
    id: '3',
    title: 'Elden Ring',
    playTime: '45h',
    genres: ['Action', 'RPG'],
    rating: '4.7',
    status: StatusEnum.SUCCESS,
    image: '/images/default_card_image.jpg',
    platform: 'PC',
    developer: 'FromSoftware',
  },
  {
    id: '4',
    title: 'Red Dead Redemption 2',
    playTime: '68h',
    genres: ['Action', 'Adventure', 'Open World'],
    rating: '4.9',
    status: StatusEnum.SUCCESS,
    image: '/images/default_card_image.jpg',
    platform: 'PC',
    developer: 'Rockstar Games',
  },
  {
    id: '5',
    title: 'Cyberpunk 2077',
    playTime: '42h',
    genres: ['Action', 'RPG', 'Open World'],
    rating: '4.6',
    status: StatusEnum.SUCCESS,
    image: '/images/default_card_image.jpg',
    platform: 'PC',
    developer: 'CD Projekt Red',
  },
];
