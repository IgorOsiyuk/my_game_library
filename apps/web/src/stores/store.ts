import { Stats } from '@/types/gameStatus';
import { Review } from '@/types/reviews';
import { createStore } from 'zustand/vanilla';

export type AppState = {
  reviews: Review[];
  stats: Stats;
  isLoading: boolean;
  error: string | null;
};

export type AppActions = {
  setReviews: (reviews: Review[]) => void;
  setStats: (stats: Stats) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  resetStore: () => void;
  updateReview: (reviewId: string, updatedReview: Partial<Review>) => void;
  addReview: (review: Review) => void;
  removeReview: (reviewId: string) => void;
  toggleFavorite: (reviewId: string) => void;
};

export type AppStore = AppState & AppActions;

export const defaultInitState: AppState = {
  reviews: [],
  stats: {
    total: 0,
    inProgress: 0,
    completed: 0,
    abandoned: 0,
    planned: 0,
    favorites: 0,
  },
  isLoading: true,
  error: null,
};

// Функция для создания initState на основе загруженных данных
export const createInitState = (
  reviews: Review[] = [],
  stats: Stats = defaultInitState.stats,
  isLoading: boolean = false,
  error: string | null = null,
): AppState => ({
  reviews,
  stats,
  isLoading,
  error,
});

export const createAppStore = (initState: AppState = defaultInitState) => {
  return createStore<AppStore>()((set, get) => ({
    ...initState,

    setReviews: (reviews: Review[]) => set({ reviews }),

    setStats: (stats: Stats) => set({ stats }),

    setLoading: (isLoading: boolean) => set({ isLoading }),

    setError: (error: string | null) => set({ error }),

    resetStore: () => set(defaultInitState),

    updateReview: (reviewId, updatedReview) =>
      set((state) => ({
        reviews: state.reviews.map((review) => (review.id === reviewId ? { ...review, ...updatedReview } : review)),
      })),

    addReview: (review: Review) =>
      set((state) => ({
        reviews: [review, ...state.reviews],
      })),

    removeReview: (reviewId: string) =>
      set((state) => ({
        reviews: state.reviews.filter((review) => review.id !== reviewId),
      })),

    toggleFavorite: (reviewId: string) =>
      set((state) => {
        // Находим отзыв для определения текущего состояния
        const targetReview = state.reviews.find((review) => review.id === reviewId);

        if (!targetReview) {
          return state; // Если отзыв не найден, возвращаем неизмененное состояние
        }

        const wasInFavorites = targetReview.isFavorite;
        const willBeInFavorites = !wasInFavorites;

        // Обновляем отзывы
        const updatedReviews = state.reviews.map((review) =>
          review.id === reviewId ? { ...review, isFavorite: willBeInFavorites } : review,
        );

        // Обновляем статистику
        const statsChange = willBeInFavorites ? 1 : -1;
        const updatedStats: Stats = {
          ...state.stats,
          favorites: Math.max(0, state.stats.favorites + statsChange),
        };

        return {
          reviews: updatedReviews,
          stats: updatedStats,
        };
      }),
  }));
};
