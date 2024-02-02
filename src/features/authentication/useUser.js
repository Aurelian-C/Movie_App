import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../services/apiAuth';

export function useUser() {
  const { data: { user, session } = {}, isLoading: isLoadingUserCredentials } =
    useQuery({
      queryKey: ['user'],
      queryFn: getUser,
      retry: false,
      staleTime: Infinity,
    });

  const accessToken = session?.access_token;
  const userEmail = user?.email;
  const userId = user?.id;
  const isAuthenticated = user?.role === 'authenticated';
  const {
    firstName = '',
    lastName = '',
    profileImage = null,
  } = user?.user_metadata || {};

  return {
    userEmail,
    firstName,
    lastName,
    profileImage,
    userId,
    isLoadingUserCredentials,
    isAuthenticated,
    accessToken,
  };
}
