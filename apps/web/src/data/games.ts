import { GameStatus } from '@/types/gameStatus';

export interface Game {
  id: string;
  title: string;
  playTime: string;
  genres: string[];
  rating: string;
  status?: GameStatus;
  image: string;
  platform: string;
  developer: string;
  isFavorite: boolean;
}

export const games: Game[] = [
  {
    id: '1',
    title: 'God of War Ragnarök',
    playTime: '26h',
    genres: ['Action', 'Adventure'],
    rating: '4.9',
    status: GameStatus.COMPLETED,
    image: '/images/default_card_image.jpg',
    platform: 'Playstation',
    developer: 'Santa Monica Studio',
    isFavorite: false,
  },
  {
    id: '2',
    title: 'The Last of Us Part II',
    playTime: '32h',
    genres: ['Action', 'Survival'],
    rating: '4.8',
    status: GameStatus.COMPLETED,
    image: '/images/default_card_image.jpg',
    platform: 'Playstation',
    developer: 'Naughty Dog',
    isFavorite: false,
  },
  {
    id: '3',
    title: 'Elden Ring',
    playTime: '45h',
    genres: ['Action', 'RPG'],
    rating: '4.7',
    status: GameStatus.COMPLETED,
    image: '/images/default_card_image.jpg',
    platform: 'PC',
    developer: 'FromSoftware',
    isFavorite: false,
  },
  {
    id: '4',
    title: 'Red Dead Redemption 2',
    playTime: '68h',
    genres: ['Action', 'Adventure', 'Open World'],
    rating: '4.9',
    status: GameStatus.COMPLETED,
    image: '/images/default_card_image.jpg',
    platform: 'PC',
    developer: 'Rockstar Games',
    isFavorite: false,
  },
  {
    id: '5',
    title: 'Cyberpunk 2077',
    playTime: '42h',
    genres: ['Action', 'RPG', 'Open World'],
    rating: '4.6',
    status: GameStatus.COMPLETED,
    image: '/images/default_card_image.jpg',
    platform: 'PC',
    developer: 'CD Projekt Red',
    isFavorite: false,
  },
];

export const latestReleases = [
  {
    title: 'God of War Ragnarök',
    genres: ['Action', 'Adventure'],
    rating: '4.9',
    image: '/images/default_card_image.jpg',
  },
  {
    title: 'Elden Ring',
    genres: ['Action', 'RPG'],
    rating: '4.8',
    image: '/images/default_card_image.jpg',
  },
  {
    title: 'Horizon Forbidden West',
    genres: ['Action', 'RPG'],
    rating: '4.7',
    image: '/images/default_card_image.jpg',
  },
];

export const popularGames = [
  {
    title: 'The Last of Us Part II',
    genres: ['Action', 'Adventure'],
    rating: '4.9',
    image: '/images/default_card_image.jpg',
  },
  {
    title: 'Red Dead Redemption 2',
    genres: ['Action', 'Adventure'],
    rating: '4.8',
    image: '/images/default_card_image.jpg',
  },
];

export const comingSoon = [
  {
    title: 'Final Fantasy XVI',
    genres: ['RPG', 'Action'],
    rating: '4.5',
    image: '/images/default_card_image.jpg',
  },
  {
    title: 'Starfield',
    genres: ['RPG', 'Sci-Fi'],
    rating: '4.6',
    image: '/images/default_card_image.jpg',
  },
];

export const filtersList = [
  {
    label: 'Жанр',
    options: [
      {
        label: 'Action',
        name: 'action',
      },
      {
        label: 'Adventure',
        name: 'adventure',
      },
    ],
  },
  {
    label: 'Платформа',
    options: [
      {
        label: 'PC',
        name: 'pc',
      },
      {
        label: 'PS4',
        name: 'ps4',
      },
    ],
  },
  {
    label: 'Разработчик',
    options: [
      {
        label: 'Rockstar Games',
        name: 'rockstar-games',
      },
      {
        label: 'Bethesda Game Studios',
        name: 'bethesda-game-studios',
      },
    ],
  },
  {
    label: 'Издатель',
    options: [
      {
        label: 'Rockstar Games',
        name: 'rockstar-games',
      },
      {
        label: 'Bethesda Game Studios',
        name: 'bethesda-game-studios',
      },
      {
        label: 'Electronic Arts',
        name: 'electronic-arts',
      },
    ],
  },
  {
    label: 'Оценка',
    options: [
      {
        label: '10',
        name: '10',
      },
      {
        label: '9',
        name: '9',
      },
      {
        label: '8',
        name: '8',
      },
      {
        label: '7',
        name: '7',
      },
    ],
  },
];
