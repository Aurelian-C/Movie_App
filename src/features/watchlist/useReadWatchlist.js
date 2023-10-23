import { useQuery } from '@tanstack/react-query';
import { getWatchlist } from '../../services/watchlistApi';
import { useSearchParams } from 'react-router-dom';

export function useReadWatchlist() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const [sortBy, order] = searchParams.get('sortBy')?.split('-') || [];

  const { data: watchlist, isLoading: isLoadingWatchlist } = useQuery({
    queryKey: ['watchlist', category, sortBy, order],
    queryFn: () => getWatchlist(category, sortBy, order),
  });

  return {
    watchlist,
    isLoadingWatchlist,
  };
}
