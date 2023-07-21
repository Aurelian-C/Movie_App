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
import {
  nowPlayingMoviesLoader,
  popularMoviesLoader,
  topRatedMoviesLoader,
  upcomingMoviesLoader,
} from './helpers/loaders/movies';
import FilterFormLayout from './pages/FilterFormLayout';
import {
  airingTodayTvLoader,
  onTheAirTvLoader,
  popularTvLoader,
  topRatedTvLoader,
} from './helpers/loaders/tv';
import PersonsPage from './pages/Persons';
import { personsLoader } from './helpers/loaders/person';

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
  ]);

  return <RouterProvider router={routes} />;
}
