import { useMutation } from '@tanstack/react-query';
import { addToFavorites as addToFavoritesAPI } from '../../services/favoritesApi';
import toast from 'react-hot-toast';

export function useAddFavorites() {
  const { mutate: addToFavorites, isLoading: isLoadingAddToFavorites } =
    useMutation({
      mutationFn: addToFavoritesAPI,
      onSuccess: data => {
        toast.success(`"${data.title}" was added to your favorites list!`);
      },
      onError: error => {
        toast.error(error.message);
      },
    });

  return {
    addToFavorites,
    isLoadingAddToFavorites,
  };
}
