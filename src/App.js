import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/Home';
import PresentationPage from './pages/Presentation';
import MovieDetails from './pages/MovieDetails';
import TvDetails from './pages/TvDetails';
import PersonDetails from './pages/PersonDetails';
import SearchPage from './pages/Search';
import MovieCrewDetails from './pages/MovieCrewDetails';
import TvCrewDetails from './pages/TvCrewDetails';
import { movieLoader } from './helpers/loaders/movie-details';
import { tvLoader } from './helpers/loaders/tv-details';
import { loaderUpcomings } from './helpers/loaders/upcomings';
import { personLoader } from './helpers/loaders/person-details';
import { searchLoader } from './helpers/loaders/search';

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
          element: <PresentationPage />,
          children: [
            { path: 'now-playing' },
            { path: 'upcoming' },
            { path: 'top-rated' },
          ],
        },
        {
          path: 'tv',
          element: <PresentationPage />,
          children: [
            { path: 'airing-today' },
            { path: 'on-the-air' },
            { path: 'top-rated' },
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
          children: [
            {
              path: ':personId',
              element: <PersonDetails />,
              loader: personLoader,
            },
          ],
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
  ]);

  return <RouterProvider router={routes} />;
}
