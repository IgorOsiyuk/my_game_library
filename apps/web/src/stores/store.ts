import { calculateStats } from '@/lib/utils';
import { createStore } from 'zustand/vanilla';

interface Stats {
  total: number;
  inProgress: number;
  completed: number;
  abandoned: number;
  planned: number;
  favorites: number;
}

export interface User {
  email: string;
  nickname: string;
  avatar: string;
}

export enum GameStatus {
  IN_PROGRESS = 'В процессе',
  COMPLETED = 'Пройдено',
  ABANDONED = 'Заброшено',
  PLANNED = 'Запланировано',
}

export enum FilterType {
  ALL = 'ALL',
  COMPLETED = 'COMPLETED',
  IN_PROGRESS = 'IN_PROGRESS',
  ABANDONED = 'ABANDONED',
  PLANNED = 'PLANNED',
  FAVORITE = 'FAVORITE',
}

export interface Review {
  id: string;
  title: string;
  plot: string;
  genres: string;
  platforms: string;
  releaseDate: string;
  status: GameStatus;
  img: string;
  playTime: string;
  gameScore: number;
  plotScore: number;
  artScore: number;
  gameplayScore: number;
  difficulty: string;
  review: string;
  isFavorite: boolean;
  rating: number;
}

// Функция для фильтрации отзывов
const filterReviews = (reviews: Review[], filterType: FilterType): Review[] => {
  switch (filterType) {
    case FilterType.ALL:
      return reviews;
    case FilterType.COMPLETED:
      return reviews.filter((review) => review.status === GameStatus.COMPLETED);
    case FilterType.IN_PROGRESS:
      return reviews.filter((review) => review.status === GameStatus.IN_PROGRESS);
    case FilterType.ABANDONED:
      return reviews.filter((review) => review.status === GameStatus.ABANDONED);
    case FilterType.PLANNED:
      return reviews.filter((review) => review.status === GameStatus.PLANNED);
    case FilterType.FAVORITE:
      return reviews.filter((review) => review.isFavorite);
    default:
      return reviews;
  }
};

export type AppState = {
  reviews: Review[];
  filteredReviews: Review[];
  selectedFilter: FilterType;
  selectedReview: Review | null;
  stats: Stats;
  user: User | null;
  isLoading: boolean;
  error: string | null;
};

export type AppActions = {
  setReviews: (reviews: Review[]) => void;
  setSelectedReview: (review: Review | null) => void;
  setStats: (stats: Stats) => void;
  setUser: (user: User | null) => void;
  updateUser: (userData: Partial<User>) => void;
  clearUser: () => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  resetStore: () => void;
  updateReview: (reviewId: string, updatedReview: Partial<Review>) => void;
  updateSelectedReview: (updatedReview: Partial<Review>) => void;
  addReview: (review: Review) => void;
  removeReview: (reviewId: string) => void;
  toggleFavorite: (reviewId: string) => void;
  setSelectedFilter: (filter: FilterType) => void;
  applyFilter: () => void;
};

export type AppStore = AppState & AppActions;

export const defaultInitState: AppState = {
  reviews: [],
  filteredReviews: [],
  selectedFilter: FilterType.ALL,
  selectedReview: null,
  stats: {
    total: 0,
    inProgress: 0,
    completed: 0,
    abandoned: 0,
    planned: 0,
    favorites: 0,
  },
  user: null,
  isLoading: true,
  error: null,
};

// Функция для создания initState на основе загруженных данных
export const createInitState = (
  reviews: Review[] = [],
  stats: Stats = defaultInitState.stats,
  user: User | null = null,
  isLoading: boolean = false,
  error: string | null = null,
): AppState => ({
  reviews,
  filteredReviews: reviews, // Изначально показываем все отзывы
  selectedFilter: FilterType.ALL,
  selectedReview: null,
  stats,
  user,
  isLoading,
  error,
});

export const createAppStore = (initState: AppState = defaultInitState) => {
  return createStore<AppStore>()((set, get) => ({
    ...initState,

    setReviews: (reviews: Review[]) =>
      set((state) => {
        const filteredReviews = filterReviews(reviews, state.selectedFilter);
        return { reviews, filteredReviews };
      }),

    setSelectedReview: (review: Review | null) => set({ selectedReview: review }),

    setStats: (stats: Stats) => set({ stats }),

    setUser: (user: User | null) => set({ user }),

    updateUser: (userData: Partial<User>) =>
      set((state) => ({
        user: state.user ? { ...state.user, ...userData } : null,
      })),

    clearUser: () => set({ user: null }),

    setLoading: (isLoading: boolean) => set({ isLoading }),

    setError: (error: string | null) => set({ error }),

    resetStore: () => set(defaultInitState),

    updateReview: (reviewId, updatedReview) =>
      set((state) => {
        const updatedReviews = state.reviews.map((review) =>
          review.id === reviewId ? { ...review, ...updatedReview } : review,
        );
        const filteredReviews = filterReviews(updatedReviews, state.selectedFilter);
        return { reviews: updatedReviews, filteredReviews };
      }),

    updateSelectedReview: (updatedReview: Partial<Review>) =>
      set((state) => ({
        selectedReview: state.selectedReview ? { ...state.selectedReview, ...updatedReview } : null,
      })),

    addReview: (review: Review) =>
      set((state) => {
        const updatedReviews = [review, ...state.reviews];
        const filteredReviews = filterReviews(updatedReviews, state.selectedFilter);
        return { reviews: updatedReviews, filteredReviews };
      }),

    removeReview: (reviewId: string) =>
      set((state) => {
        const updatedReviews = state.reviews.filter((review) => review.id !== reviewId);
        const filteredReviews = filterReviews(updatedReviews, state.selectedFilter);

        // Пересчитываем статистику
        const newStats = calculateStats(updatedReviews);

        return {
          reviews: updatedReviews,
          filteredReviews,
          selectedReview: null,
          stats: newStats,
        };
      }),

    toggleFavorite: (reviewId: string) =>
      set((state) => {
        const updatedReviews = state.reviews.map((review) =>
          review.id === reviewId ? { ...review, isFavorite: !review.isFavorite } : review,
        );
        const filteredReviews = filterReviews(updatedReviews, state.selectedFilter);

        // Также обновляем selectedReview если это тот же отзыв
        const updatedSelectedReview =
          state.selectedReview?.id === reviewId
            ? { ...state.selectedReview, isFavorite: !state.selectedReview.isFavorite }
            : state.selectedReview;

        return {
          reviews: updatedReviews,
          filteredReviews,
          selectedReview: updatedSelectedReview,
        };
      }),

    setSelectedFilter: (filter: FilterType) =>
      set((state) => {
        const filteredReviews = filterReviews(state.reviews, filter);
        return { selectedFilter: filter, filteredReviews };
      }),

    applyFilter: () =>
      set((state) => {
        const filteredReviews = filterReviews(state.reviews, state.selectedFilter);
        return { filteredReviews };
      }),
  }));
};
