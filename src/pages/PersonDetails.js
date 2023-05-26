import Person from '../components/Person/Person';
import { useLoaderData } from 'react-router-dom';
import { API_KEY, API_URL } from '../config/config';
import { createMovieCredits, createPersonDetails } from '../config/helpers';
import { useEffect } from 'react';

export default function PersonDetails() {
  const [person, movieCredits] = useLoaderData();
  const personDetail = createPersonDetails(person);
  const movieCreditsDetail = createMovieCredits(movieCredits.cast);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Person personDetail={personDetail} movieCredits={movieCreditsDetail} />
  );
}

export async function personLoader({ params }) {
  const person = await fetch(
    `${API_URL}/person/${params.personId}?api_key=${API_KEY}`
  );
  const movieCredits = await fetch(
    `${API_URL}/person/${params.personId}/movie_credits?api_key=${API_KEY}`
  );

  return [await person.json(), await movieCredits.json()];
}
