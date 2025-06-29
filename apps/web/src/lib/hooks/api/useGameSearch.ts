'use client';

import { GameSearchResult } from '@/actions/searchGames';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import useDebounce from '../useDebounce';

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
      const { data: response } = await axios.get(`/api/games/search?q=${encodeURIComponent(query)}`);

      if (!response.success) {
        toast.error(response.error || 'Ошибка при поиске игр');
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
