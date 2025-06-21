'use client';

import { GameSearchResult, searchGames } from '@/actions/searchGames';
import { signOut } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import useDebounce from './useDebounce';

export function useGameSearch() {
  const [searchResults, setSearchResults] = useState<GameSearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Дебаунсированный поисковой запрос (задержка 500мс)
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const performSearch = useCallback(async (query: string) => {
    if (!query || query.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);

    try {
      const response = await searchGames(query);

      if (!response.success) {
        if (response.statusCode === 401) {
          signOut({ callbackUrl: '/signin' });
        } else {
          toast.error(response.error || 'Ошибка при поиске игр');
        }
        setSearchResults([]);
        return;
      }

      setSearchResults(response.data || []);
    } catch (error: any) {
      console.error('Search error:', error);
      toast.error('Ошибка при поиске игр');
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  // Функция для обновления поискового запроса
  const updateSearchQuery = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  // Функция для очистки результатов поиска
  const clearSearch = useCallback(() => {
    setSearchQuery('');
    setSearchResults([]);
  }, []);

  // Автоматический поиск при изменении дебаунсированного запроса
  useEffect(() => {
    performSearch(debouncedSearchQuery);
  }, [debouncedSearchQuery, performSearch]);

  return {
    searchResults,
    isSearching,
    searchQuery,
    updateSearchQuery,
    clearSearch,
    performSearch,
  };
}
