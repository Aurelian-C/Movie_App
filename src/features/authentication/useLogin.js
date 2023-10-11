import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginAPI } from '../../services/authentication';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading: isLoadingUser } = useMutation({
    mutationFn: loginAPI,
    onSuccess: data => {
      queryClient.setQueryData(['user'], data.user);
      toast.success(`Welcome back, ${data.user.user_metadata.firstName}!`);
      navigate('/', { replace: true });
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  return {
    login,
    isLoadingUser,
  };
}
