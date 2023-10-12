import { removeFavorite as removeFavoriteAPI } from '../../services/favoritesApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export function useRemoveFavorites() {
  const queryClient = useQueryClient();

  const { mutate: removeFavorite, isLoading: isLoadingRemoveFavorite } =
    useMutation({
      mutationFn: removeFavoriteAPI,
      onSuccess: () => {
        queryClient.invalidateQueries(['favorites']);
        toast.success(`The item was removed from your favorites list!`);
      },
      onError: error => {
        toast.error(error.message);
      },
    });

  return {
    removeFavorite,
    isLoadingRemoveFavorite,
  };
}
