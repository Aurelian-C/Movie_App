import Person from '../components/Person/Person';
import { useLoaderData } from 'react-router-dom';
import { API_KEY } from '../config/config';
import { createMovieCredits, createPersonDetails } from '../config/helpers';

export default function PersonDetails() {
  const [person, movieCredits] = useLoaderData();
  const personDetail = createPersonDetails(person);
  const movieCreditsDetail = createMovieCredits(movieCredits.cast);

  return (
    <Person personDetail={personDetail} movieCredits={movieCreditsDetail} />
  );
}

export async function personLoader({ params }) {
  const person = await fetch(
    `https://api.themoviedb.org/3/person/${params.personId}?api_key=${API_KEY}`
  );
  const movieCredits = await fetch(
    `https://api.themoviedb.org/3/person/${params.personId}/movie_credits?api_key=${API_KEY}`
  );

  return [await person.json(), await movieCredits.json()];
}
