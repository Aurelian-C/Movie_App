import { Suspense } from 'react';
import CastAndCrew from '../components/CastAndCrew/CastAndCrew';
import { Await, useRouteLoaderData } from 'react-router-dom';
import { createCastDetails, createCrewDetails } from '../config/helpers';

export default function MovieCrewDetails() {
  const { credits } = useRouteLoaderData('movie-detail');

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={credits}>
        {credits => {
          const castDetails = createCastDetails(credits.cast);
          const crewDetails = createCrewDetails(credits.crew);
          return <CastAndCrew cast={castDetails} crew={crewDetails} />;
        }}
      </Await>
    </Suspense>
  );
}
