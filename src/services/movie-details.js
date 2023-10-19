import { API_KEY, API_URL } from '../config/config';
import { defer } from 'react-router-dom';

// Movie details fetch function
async function fetchMovieDetails(params) {
  let collection;
  const response = await fetch(
    `${API_URL}/movie/${params.movieId}?api_key=${API_KEY}`
  );
  const movie = await response.json();

  if (movie.belongs_to_collection) {
    const response = await fetch(
      `${API_URL}/collection/${movie.belongs_to_collection.id}?api_key=${API_KEY}`
    );
    collection = await response.json();
  }

  return [movie, collection];
}

async function fetchMovieCredits(params) {
  const response = await fetch(
    `${API_URL}/movie/${params.movieId}/credits?api_key=${API_KEY}`
  );
  const credits = await response.json();
  return credits;
}

async function fetchMovieVideos(params) {
  const response = await fetch(
    `${API_URL}/movie/${params.movieId}/videos?api_key=${API_KEY}`
  );
  const videos = await response.json();

  // Make an array with unique videos types
  const videoTypes = [...new Set(videos.results.map(video => video.type))];
  videoTypes.unshift('None');

  return { videos, videoTypes };
}

// Loader for movies
export async function movieLoader({ params }) {
  return defer({
    movie: await fetchMovieDetails(params),
    credits: fetchMovieCredits(params),
    videos: fetchMovieVideos(params),
  });
}
