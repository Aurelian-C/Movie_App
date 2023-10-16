import Person from '../ui/Person/Person';
import PersonCredits from '../ui/Person/PersonCredits';
import { Await, useLoaderData } from 'react-router-dom';
import { createMovieCredits, createPersonDetails } from '../helpers/helpers';
import { Suspense, useEffect } from 'react';

export default function PersonDetails() {
  const {
    personAndMovie: { personDetails, movieCredits },
    combinedCredits,
  } = useLoaderData();

  const personDetail = createPersonDetails(personDetails);
  const cast = createMovieCredits(movieCredits.cast);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={personDetail}>
          {personDetail => <Person personDetail={personDetail} cast={cast} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={combinedCredits}>
          {combined => {
            const castCredits = createMovieCredits(combined.cast);
            const crewCredits = createMovieCredits(combined.crew);
            return <PersonCredits cast={castCredits} crew={crewCredits} />;
          }}
        </Await>
      </Suspense>
    </>
  );
}
