import RootLayout from './pages/RootLayout';
import HomePage from './pages/Home';
import PresentationPage from './pages/Presentation';
import MovieDetails from './pages/MovieDetails';
import TvDetails from './pages/TvDetails';
import PersonDetails from './pages/PersonDetails';
import SearchPage from './pages/Search';
import MovieCrewDetails from './pages/MovieCrewDetails';
import TvCrewDetails from './pages/TvCrewDetails';
import FilterFormLayout from './pages/FilterFormLayout';
import PersonsPage from './pages/Persons';
import AccountPage from './pages/Account';

import Signup from './features/authentication/Signup';
import Login from './features/authentication/Login';

import { movieLoader } from './services/movie-details';
import { tvLoader } from './services/tv-details';
import { loaderUpcomings } from './services/upcomings';
import { personLoader } from './services/person-details';
import { searchLoader } from './services/search';
import {
  nowPlayingMoviesLoader,
  popularMoviesLoader,
  topRatedMoviesLoader,
  upcomingMoviesLoader,
} from './services/movies';
import {
  airingTodayTvLoader,
  onTheAirTvLoader,
  popularTvLoader,
  topRatedTvLoader,
} from './services/tv';
import { personsLoader } from './services/person';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

export default function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      loader: loaderUpcomings,
      id: 'route-data',
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'movie',
          element: <FilterFormLayout />,
          children: [
            {
              path: 'popular',
              element: <PresentationPage />,
              loader: popularMoviesLoader,
            },
            {
              path: 'now-playing',
              element: <PresentationPage />,
              loader: nowPlayingMoviesLoader,
            },
            {
              path: 'upcoming',
              element: <PresentationPage />,
              loader: upcomingMoviesLoader,
            },
            {
              path: 'top-rated',
              element: <PresentationPage />,
              loader: topRatedMoviesLoader,
            },
          ],
        },
        {
          path: 'tv',
          element: <FilterFormLayout />,
          children: [
            {
              path: 'popular',
              element: <PresentationPage />,
              loader: popularTvLoader,
            },
            {
              path: 'airing-today',
              element: <PresentationPage />,
              loader: airingTodayTvLoader,
            },
            {
              path: 'on-the-air',
              element: <PresentationPage />,
              loader: onTheAirTvLoader,
            },
            {
              path: 'top-rated',
              element: <PresentationPage />,
              loader: topRatedTvLoader,
            },
          ],
        },
        {
          path: 'movie/:movieId',
          loader: movieLoader,
          id: 'movie-detail',
          children: [
            { index: true, element: <MovieDetails /> },
            { path: 'cast', element: <MovieCrewDetails /> },
          ],
        },
        {
          path: 'tv/:tvId',
          loader: tvLoader,
          id: 'tv-detail',
          children: [
            { index: true, element: <TvDetails /> },
            { path: 'cast', element: <TvCrewDetails /> },
          ],
        },
        {
          path: 'person',
          element: <FilterFormLayout />,
          children: [
            {
              path: 'popular',
              element: <PersonsPage />,
              loader: personsLoader,
            },
          ],
        },
        {
          path: 'person/:personId',
          element: <PersonDetails />,
          loader: personLoader,
        },
        {
          path: 'search',
          children: [
            {
              path: ':query',
              element: <SearchPage />,
              loader: searchLoader,
            },
          ],
        },
      ],
    },
    { path: '/signup', element: <Signup /> },
    { path: '/login', element: <Login /> },
    { path: '/account', element: <AccountPage /> },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: { duration: 5000 },
          error: { duration: 7000 },
          style: {
            fontSize: '18px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--bg-toast)',
            color: 'var(--color-toast)',
          },
        }}
      />
    </QueryClientProvider>
  );
}
