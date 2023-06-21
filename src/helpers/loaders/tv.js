import { API_KEY, API_URL } from '../../config/config';
import { defer } from 'react-router-dom';

// Airing today tv
async function fetchAiringTodayTv() {
  const response = await fetch(
    `${API_URL}/tv/airing_today?page=1&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

export function airingTodayTvLoader() {
  return defer({
    details: {
      data: fetchAiringTodayTv(),
      identifier: 'airing_today',
      mediaType: 'tv',
    },
  });
}

// On the air tv
async function fetchOnTheAirTv() {
  const response = await fetch(
    `${API_URL}/tv/on_the_air?page=1&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

export function onTheAirTvLoader() {
  return defer({
    details: {
      data: fetchOnTheAirTv(),
      identifier: 'on_the_air',
      mediaType: 'tv',
    },
  });
}

// Popular tv
async function fetchPopularTv() {
  const response = await fetch(
    `${API_URL}/tv/popular?page=1&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

export function popularTvLoader() {
  return defer({
    details: {
      data: fetchPopularTv(),
      identifier: 'popular',
      mediaType: 'tv',
    },
  });
}

// Top rated tv
async function fetchTopRatedTv() {
  const response = await fetch(
    `${API_URL}/tv/top_rated?page=1&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

export function topRatedTvLoader() {
  return defer({
    details: {
      data: fetchTopRatedTv(),
      identifier: 'top_rated',
      mediaType: 'tv',
    },
  });
}
