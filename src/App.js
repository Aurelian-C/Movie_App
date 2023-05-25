import HomePage from './pages/Home';
import MovieDetails, { movieLoader } from './pages/MovieDetails';
import PersonDetails, { personLoader } from './pages/PersonDetails';
import PresentationPage from './pages/Presentation';
import RootLayout from './pages/RootLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchPage, { searchLoader } from './pages/Search';

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
          element: <MovieDetails />,
          loader: movieLoader,
        },
        { path: 'tv/:tvId' },
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
