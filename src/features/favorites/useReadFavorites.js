import { useQuery } from '@tanstack/react-query';
import { getFavorites } from '../../services/favoritesApi';

export function useReadFavorites() {
  const { data: favorites, isLoading: isLoadingFavorites } = useQuery({
    queryKey: ['favorites'],
    queryFn: getFavorites,
  });

  return {
    favorites,
    isLoadingFavorites,
  };
}
