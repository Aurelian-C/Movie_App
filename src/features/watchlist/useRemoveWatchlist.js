import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeWatchlist as removeWatchlistAPI } from '../../services/watchlistApi';
import toast from 'react-hot-toast';

export function useRemoveWatchlist() {
  const queryClient = useQueryClient();

  const { mutate: removeWatchlist, isLoading: isLoadingRemoveWatchlist } =
    useMutation({
      mutationFn: removeWatchlistAPI,
      onSuccess: () => {
        queryClient.invalidateQueries(['watchlist']);
        toast.success(`The item was removed from your watchlist!`);
      },
      onError: error => {
        toast.error(error.message);
      },
    });

  return {
    removeWatchlist,
    isLoadingRemoveWatchlist,
  };
}
