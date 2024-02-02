import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserData as updateUserDataAPI } from '../../services/apiUsers';
import toast from 'react-hot-toast';

export function useUpdateUserData() {
  const query = useQueryClient();

  const { mutate: updateUserData, isLoading: isLoadingUpdateUserData } =
    useMutation({
      mutationFn: updateUserDataAPI,
      onSuccess: () => {
        toast.success('Profile data update completed successfully!');
        query.invalidateQueries({ queryKey: ['user'] });
      },
    });

  return { updateUserData, isLoadingUpdateUserData };
}

export default useUpdateUserData;
