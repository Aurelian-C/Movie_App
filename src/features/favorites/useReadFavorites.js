import { useQuery } from '@tanstack/react-query';
import { getFavorites } from '../../services/favoritesApi';
import { useSearchParams } from 'react-router-dom';

export function useReadFavorites() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  const { data: favorites, isLoading: isLoadingFavorites } = useQuery({
    queryKey: ['favorites', category],
    queryFn: () => getFavorites(category),
  });

  return {
    favorites,
    isLoadingFavorites,
  };
}
