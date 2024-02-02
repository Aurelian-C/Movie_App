import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserEmailOrPassword as updateUserEmailOrPasswordAPI } from '../../services/apiUsers';
import toast from 'react-hot-toast';

export function useUpdateEmailOrPassword() {
  const query = useQueryClient();

  const {
    mutate: updateEmailOrPassword,
    isLoading: isLoadingUpdateEmailOrPassword,
  } = useMutation({
    mutationFn: updateUserEmailOrPasswordAPI,
    onSuccess: () => {
      toast.success(
        'The update of the account data has been completed successfully!'
      );
      query.invalidateQueries({ queryKey: ['user'] });
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  return { updateEmailOrPassword, isLoadingUpdateEmailOrPassword };
}

export default useUpdateEmailOrPassword;
