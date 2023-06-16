import { useEffect } from 'react';

export default function useGenres(mediaType) {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${API_URL}/genre/${mediaType}/list?api_key=${API_KEY}`
        );

        const results = await response.json();
        console.log(results);
      } catch (err) {
        throw err;
      }
    }
    fetchData();
  });
}
