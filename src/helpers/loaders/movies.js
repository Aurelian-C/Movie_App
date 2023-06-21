import { API_KEY, API_URL } from '../../config/config';
import { defer } from 'react-router-dom';

// Popular movies
async function fetchPopularMovies() {
  const response = await fetch(
    `${API_URL}/movie/popular?page=1&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

export function popularMoviesLoader() {
  return defer({
    details: {
      data: fetchPopularMovies(),
      identifier: 'popular',
      mediaType: 'movie',
    },
  });
}

// Now playing movies
async function fetchNowPlayingMovies() {
  const response = await fetch(
    `${API_URL}/movie/now_playing?page=1&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

export function nowPlayingMoviesLoader() {
  return defer({
    details: {
      data: fetchNowPlayingMovies(),
      identifier: 'now_playing',
      mediaType: 'movie',
    },
  });
}

// Top rated movies
async function fetchTopRatedMovies() {
  const response = await fetch(
    `${API_URL}/movie/top_rated?page=1&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

export function topRatedMoviesLoader() {
  return defer({
    details: {
      data: fetchTopRatedMovies(),
      identifier: 'top_rated',
      mediaType: 'movie',
    },
  });
}

// Upcoming movies
async function fetchUpcomingMovies() {
  const response = await fetch(
    `${API_URL}/movie/upcoming?page=1&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

export function upcomingMoviesLoader() {
  return defer({
    details: {
      data: fetchUpcomingMovies(),
      identifier: 'upcoming',
      mediaType: 'movie',
    },
  });
}
