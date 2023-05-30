import Movie from '../components/Movie/Movie';
import PersonCard from '../components/Cards/PersonCard/PersonCard';
import { API_KEY, API_URL } from '../config/config';
import {
  createCastDetails,
  createCollectionDetails,
  createMovieDetails,
} from '../config/helpers';
import { Await, defer, useLoaderData } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import MovieCollections from '../components/Movie/MovieCollections';
import LoadingCard from '../components/Cards/LoadingCard/LoadingCard';

export default function MovieDetails() {
  const {
    movie: [movie, rawCollection],
    credits,
  } = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={movie}>
          {movie => {
            const movieDetail = createMovieDetails(movie);
            return <Movie movieDetail={{ ...movieDetail }} />;
          }}
        </Await>
      </Suspense>
      <Suspense fallback={<LoadingCard type="person" />}>
        <Await resolve={credits}>
          {credits => {
            const castDetails = createCastDetails(credits.cast);
            return <PersonCard castDetail={castDetails} />;
          }}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={rawCollection}>
          {collection => {
            const formatCollection = collection
              ? createCollectionDetails(collection)
              : null;
            return <MovieCollections collection={formatCollection} />;
          }}
        </Await>
      </Suspense>
    </>
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

// Loader for movies
export async function movieLoader({ params }) {
  return defer({
    movie: await fetchMovieDetails(params),
    credits: fetchMovieCredits(params),
  });
}
