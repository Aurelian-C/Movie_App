import { API_KEY, API_URL } from '../../config/config';
import { defer } from 'react-router-dom';

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
