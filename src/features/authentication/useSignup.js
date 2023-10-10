import { useMutation } from '@tanstack/react-query';
import { signUp } from '../../services/authentication';
import { useNavigate } from 'react-router-dom';

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isLoading: isLoadingSignup } = useMutation({
    mutationFn: formObject => signUp(formObject),
    onSuccess: () => {
      navigate('/', { replace: true });
    },
    onError: error => {
      console.log(error);
    },
  });

  return {
    signup,
    isLoadingSignup,
  };
}
