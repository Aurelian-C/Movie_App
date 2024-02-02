import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signUp } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signup, isLoading: isLoadingSignup } = useMutation({
    mutationFn: formObject => signUp(formObject),
    onSuccess: data => {
      queryClient.setQueryData(['user'], data.user);
      navigate('/', { replace: true });
    },
    onError: error => {
      toast.error(error.message, { duration: 9000 });
    },
  });

  return {
    signup,
    isLoadingSignup,
  };
}
