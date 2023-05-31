import { API_KEY, API_URL } from '../config/config';
import { createCollectionDetails, createMovieDetails } from '../config/helpers';
import { defer, useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
import MotionPictureMovie from '../components/MotionPicture/Movie/MotionPictureMovie';

export default function MovieDetails() {
  const {
    movie: [movie, collection],
    credits,
    videos,
  } = useLoaderData();
  console.log('Movie:', movie);

  const movieDetail = createMovieDetails(movie);
  let collectionDetail;
  if (collection) {
    collectionDetail = createCollectionDetails(collection);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MotionPictureMovie
      motion={{ ...movieDetail }}
      credits={credits}
      collection={collectionDetail}
      videos={videos}
    />
  );
}

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
  return videos;
}

// Loader for movies
export async function movieLoader({ params }) {
  return defer({
    movie: await fetchMovieDetails(params),
    credits: fetchMovieCredits(params),
    videos: fetchMovieVideos(params),
  });
}
