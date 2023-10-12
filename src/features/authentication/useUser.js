import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/authentication';

export function useUser() {
  const { data: userCredentials, isLoading: isLoadingUserCredentials } =
    useQuery({
      queryKey: ['user'],
      queryFn: getCurrentUser,
    });

  const isAuthenticated = userCredentials?.role === 'authenticated';
  const firstName = userCredentials?.user_metadata?.firstName;
  const lastName = userCredentials?.user_metadata?.lastName;
  const userEmail = userCredentials?.email;
  const userId = userCredentials?.id;

  return {
    isAuthenticated,
    firstName,
    lastName,
    userEmail,
    userId,
    isLoadingUserCredentials,
  };
}
