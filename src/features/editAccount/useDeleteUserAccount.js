import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser as deleteUserApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useDeleteUserAccount() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isLoadingDeleteUser } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      queryClient.removeQueries(); // Just logging out, we'll of course remove the user from local storage and also from the server, but it will stay inside the React Query cache, because we stored it there. And so if, for some reason, some malicious actor gets access to that, that would be very bad. And so with queryClient.removeQueries() we can remove all queries that have been accumulated in the cache.
      navigate('/', { replace: true });
    },
    onError: () => {
      toast.error('This functionality is currently not enabled!', {
        duration: 9000,
        id: 'delete-user-error',
      });
    },
  });

  return { deleteUser, isLoadingDeleteUser };
}
