import { Suspense } from 'react';
import CastAndCrew from '../components/CastAndCrew/CastAndCrew';
import { Await, useRouteLoaderData } from 'react-router-dom';
import {
  createCastDetails,
  createCrewDetails,
  createMovieDetails,
} from '../config/helpers';

export default function MovieCrewDetails() {
  const { movie, credits } = useRouteLoaderData('movie-detail');

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={credits}>
        {credits => {
          const castDetails = createCastDetails(credits.cast);
          const crewDetails = createCrewDetails(credits.crew);
          const movieDetails = createMovieDetails(movie[0]);
          return (
            <CastAndCrew
              cast={castDetails}
              crew={crewDetails}
              motion={movieDetails}
            />
          );
        }}
      </Await>
    </Suspense>
  );
}
