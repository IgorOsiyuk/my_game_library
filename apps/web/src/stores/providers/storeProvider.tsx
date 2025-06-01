'use client';

import { type ReactNode, createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';
import { AppStore, createAppStore, defaultInitState } from '../store';

// import { type AppStore, createAppStore, defaultInitState } from '@/stores/store';

export type AppStoreApi = ReturnType<typeof createAppStore>;

export const AppStoreContext = createContext<AppStoreApi | undefined>(undefined);

export interface AppStoreProviderProps {
  children: ReactNode;
}

export const AppStoreProvider = ({ children }: AppStoreProviderProps) => {
  const storeRef = useRef<AppStoreApi | null>(null);
  // const { initialData, error, isLoading } = useInititalData();

  // Инициализируем store с дефолтными значениями
  if (storeRef.current === null) {
    storeRef.current = createAppStore(defaultInitState);
  }

  // // Обновляем store когда данные загружены
  // useEffect(() => {
  //   if (storeRef.current) {
  //     if (!isLoading && initialData) {
  //       // Создаем новое состояние с загруженными данными
  //       const newState = createInitState(
  //         initialData.reviews,
  //         initialData.stats,
  //         false, // загрузка завершена
  //         error,
  //       );

  //       // Обновляем store
  //       storeRef.current.setState(newState);
  //     } else if (isLoading) {
  //       // Устанавливаем состояние загрузки
  //       storeRef.current.setState({ isLoading: true, error: null });
  //     } else if (error) {
  //       // Устанавливаем ошибку
  //       storeRef.current.setState({ isLoading: false, error });
  //     }
  //   }
  // }, [initialData, isLoading, error]);

  return <AppStoreContext.Provider value={storeRef.current}>{children}</AppStoreContext.Provider>;
};

export const useAppStore = <T,>(selector: (store: AppStore) => T): T => {
  const appStoreContext = useContext(AppStoreContext);

  if (!appStoreContext) {
    throw new Error(`useAppStore должен использоваться внутри AppStoreProvider`);
  }

  return useStore(appStoreContext, selector);
};
