import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addToWatchlist as addToWatchlistAPI } from '../../services/watchlistApi';
import toast from 'react-hot-toast';

export function useAddWatchlist() {
  const queryClient = useQueryClient();

  const { mutate: addToWatchlist, isLoading: isLoadingAddToWatchlist } =
    useMutation({
      mutationFn: addToWatchlistAPI,
      onSuccess: data => {
        toast.success(`"${data.title}" was added to your watchlist!`);
        queryClient.invalidateQueries(['watchlist']);
      },
      onError: error => {
        toast.error(error.message);
      },
    });

  return {
    addToWatchlist,
    isLoadingAddToWatchlist,
  };
}
