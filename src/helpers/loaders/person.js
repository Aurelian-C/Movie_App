import { API_KEY, API_URL } from '../../config/config';
import { defer } from 'react-router-dom';
import { asyncDelay } from '../helpers';

async function fetchPersons() {
  const response = await fetch(
    `${API_URL}/person/popular?page=1&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

export function personsLoader() {
  return defer({
    details: {
      data: fetchPersons(),
      identifier: 'popular',
      mediaType: 'person',
    },
  });
}
