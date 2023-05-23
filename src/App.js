import HomePage from './pages/Home';
import MovieDetails, { movieLoader } from './pages/MovieDetails';
import PresentationPage from './pages/Presentation';
import RootLayout from './pages/RootLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
        { path: 'person', children: [{ path: ':personId' }] },
        { path: 'discuss' },
        { path: 'leaderboard' },
        { path: 'talk' },
        { path: 'documentation', children: [{ path: 'api' }] },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
