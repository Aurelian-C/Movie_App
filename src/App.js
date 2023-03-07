import HomePage from './pages/Home';
import MoviePage from './pages/Movie';
import TvPage from './pages/TV';
import RootLayout from './pages/RootLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,

      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'movie',
          element: <MoviePage />,
          children: [
            { path: 'now-playing' },
            { path: 'upcoming' },
            { path: 'top-rated' },
            { path: ':movieId' },
          ],
        },
        {
          path: 'tv',
          element: <TvPage />,
          children: [
            { path: 'airing-today' },
            { path: 'on-the-air' },
            { path: 'top-rated' },
            { path: ':tvId' },
          ],
        },
        { path: 'person', children: [{ path: ':personId' }] },
        { path: 'discuss' },
        { path: 'leaderboard' },
        { path: 'talk' },
        { path: 'documentation', children: [{ path: 'api' }] },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
