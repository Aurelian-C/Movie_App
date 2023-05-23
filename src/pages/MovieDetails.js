import { useLoaderData } from 'react-router-dom';
import { API_KEY } from '../config/config';
import Movie from '../components/Movie/Movie';
import { createMovieDetails } from '../config/helpers';

export default function MovieDetails() {
  const movie = useLoaderData();
  const movieDetail = createMovieDetails(movie);
  console.log(movie);
  console.log(movieDetail);

  return <Movie movieDetail={{ ...movieDetail }} />;
}

export async function movieLoader({ params }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${API_KEY}`
  );
  return response;
}
