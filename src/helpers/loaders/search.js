import { API_KEY, API_URL } from '../../config/config';

export async function searchLoader({ params }) {
  const response = await fetch(
    `${API_URL}/search/multi?query=${params.query}&api_key=${API_KEY}`
  );

  return response;
}
