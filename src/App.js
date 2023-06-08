import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/Home';
import PresentationPage from './pages/Presentation';
import MovieDetails, { movieLoader } from './pages/MovieDetails';
import PersonDetails, { personLoader } from './pages/PersonDetails';
import TvDetails, { tvLoader } from './pages/TvDetails';
import SearchPage, { searchLoader } from './pages/Search';
import MovieCrewDetails from './pages/MovieCrewDetails';
import TvCrewDetails from './pages/TvCrewDetails';

export default function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
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
