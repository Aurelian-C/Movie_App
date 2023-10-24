import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Spinner from '../../ui/Spinner/Spinner';
import { useUser } from './useUser';

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user (Get the JSON object for the logged in user)
  const { isAuthenticated, isLoadingUserCredentials } = useUser();

  // 2. If there is NO authenticated user, redirect to the main page
  useEffect(() => {
    if (!isAuthenticated && !isLoadingUserCredentials) navigate('/');
  }, [isAuthenticated, isLoadingUserCredentials, navigate]);

  // 3. While loading, show a spinner
  if (isLoadingUserCredentials) {
    return <Spinner />;
  }

  // 4. If there IS A USER, render the /account page
  if (isAuthenticated) {
    return (
      <>
        {children}
        <Outlet />
      </>
    );
  }
}
