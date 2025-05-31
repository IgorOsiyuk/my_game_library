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

  if (storeRef.current === null) {
    storeRef.current = createAppStore(defaultInitState);
  }

  return <AppStoreContext.Provider value={storeRef.current}>{children}</AppStoreContext.Provider>;
};

export const useAppStore = <T,>(selector: (store: AppStore) => T): T => {
  const appStoreContext = useContext(AppStoreContext);

  if (!appStoreContext) {
    throw new Error(`useAppStore должен использоваться внутри AppStoreProvider`);
  }

  return useStore(appStoreContext, selector);
};
