import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signUp } from '../../services/authentication';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signup, isLoading: isLoadingSignup } = useMutation({
    mutationFn: formObject => signUp(formObject),
    onSuccess: data => {
      queryClient.setQueryData(['user'], data.user);
      toast.success(
        'Welcome to the app! The signup was successful. You will need to confirm your email address before signing in for the first time!'
      );
      navigate('/', { replace: true });
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  return {
    signup,
    isLoadingSignup,
  };
}
