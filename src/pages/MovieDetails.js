import { API_KEY } from '../config/config';
import { createCastDetails, createMovieDetails } from '../config/helpers';
import { useLoaderData } from 'react-router-dom';
import Movie from '../components/Movie/Movie';
import PersonCard from '../components/Cards/PersonCard/PersonCard';
import { useEffect } from 'react';

export default function MovieDetails() {
  const [movie, credits] = useLoaderData();
  const movieDetail = createMovieDetails(movie);
  const castDetails = createCastDetails(credits.cast);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Movie movieDetail={{ ...movieDetail }} />
      <PersonCard castDetail={castDetails} />
    </>
  );
}

export async function movieLoader({ params }) {
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${API_KEY}`
  );
  const credits = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movieId}/credits?api_key=${API_KEY}`
  );

  return [await movie.json(), await credits.json()];
}
