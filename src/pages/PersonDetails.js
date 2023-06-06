import Person from '../components/Person/Person';
import PersonCredits from '../components/Person/PersonCredits';
import { Await, defer, useLoaderData } from 'react-router-dom';
import { API_KEY, API_URL } from '../config/config';
import { createMovieCredits, createPersonDetails } from '../config/helpers';
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
            const combinedCredits = createMovieCredits(combined.cast);
            return <PersonCredits cast={combinedCredits} />;
          }}
        </Await>
      </Suspense>
    </>
  );
}

async function personAndMovie(personId) {
  const personResponse = await fetch(
    `${API_URL}/person/${personId}?api_key=${API_KEY}`
  );
  const movieCreditsResponse = await fetch(
    `${API_URL}/person/${personId}/movie_credits?api_key=${API_KEY}`
  );
  const personData = await personResponse.json();
  const movieCreditsData = await movieCreditsResponse.json();
  return { personDetails: personData, movieCredits: movieCreditsData };
}

async function combinedCredits(personId) {
  const response = await fetch(
    `${API_URL}/person/${personId}/combined_credits?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

export async function personLoader({ params }) {
  const id = params.personId;

  return defer({
    personAndMovie: await personAndMovie(id),
    combinedCredits: combinedCredits(id),
  });
}
