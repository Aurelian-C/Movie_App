import { API_KEY, API_URL } from '../config/config';
import { defer } from 'react-router-dom';

// TV details fetch function
export async function fetchTvDetails(params) {
  const response = await fetch(
    `${API_URL}/tv/${params.tvId}?api_key=${API_KEY}`
  );
  const tv = await response.json();
  return tv;
}

export async function fetchTvCredits(params) {
  const response = await fetch(
    `${API_URL}/tv/${params.tvId}/credits?api_key=${API_KEY}`
  );
  const credits = await response.json();
  return credits;
}

async function fetchMovieVideos(params) {
  const response = await fetch(
    `${API_URL}/tv/${params.tvId}/videos?api_key=${API_KEY}`
  );
  const videos = await response.json();
  return videos;
}

// Loader for TVs
export async function tvLoader({ params }) {
  return defer({
    tv: await fetchTvDetails(params),
    credits: fetchTvCredits(params),
    videos: fetchMovieVideos(params),
  });
}
