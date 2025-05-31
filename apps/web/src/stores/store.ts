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
  resetStore: () => void;
  updateReview: (reviewId: string, updatedReview: Partial<Review>) => void;
  addReview: (review: Review) => void;
  removeReview: (reviewId: string) => void;
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
  isLoading: false,
  error: null,
};

export const createAppStore = (initState: AppState = defaultInitState) => {
  return createStore<AppStore>()((set, get) => ({
    ...initState,

    setReviews: (reviews: Review[]) => set({ reviews }),

    setStats: (stats: Stats) => set({ stats }),

    resetStore: () => set(defaultInitState),

    setLoading: (isLoading: boolean) => set({ isLoading }),

    setError: (error: string | null) => set({ error }),

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
  }));
};
