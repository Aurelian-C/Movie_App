import Movie from '../components/Movie/Movie';
import PersonCard from '../components/Cards/PersonCard/PersonCard';
import { API_KEY, API_URL } from '../config/config';
import { createCastDetails, createMovieDetails } from '../config/helpers';
import { Await, defer, useLoaderData } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import MovieCollections from '../components/Movie/MovieCollections';

export default function MovieDetails() {
  const { movie, credits } = useLoaderData();

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
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={credits}>
          {credits => {
            const castDetails = createCastDetails(credits.cast);
            return <PersonCard castDetail={castDetails} />;
          }}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={movie}>
          {movie => {
            const movieDetail = createMovieDetails(movie);
            return (
              <MovieCollections
                collection={movieDetail.belongs_to_collection}
              />
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}

// Movie details fetch function
async function fetchMovieDetails(params) {
  const response = await fetch(
    `${API_URL}/movie/${params.movieId}?api_key=${API_KEY}`
  );
  const movie = await response.json();
  return movie;
}

async function fetchMovieCredits(params) {
  const response = await fetch(
    `${API_URL}/movie/${params.movieId}/credits?api_key=${API_KEY}`
  );
  const credits = await response.json();
  return credits;
}

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

// Loader for movies
export async function movieLoader({ params }) {
  return defer({
    movie: await fetchMovieDetails(params),
    credits: fetchMovieCredits(params),
  });
}

// Loader for TVs
export async function tvLoader({ params }) {
  return defer({
    movie: await fetchTvDetails(params),
    credits: fetchTvCredits(params),
  });
}
