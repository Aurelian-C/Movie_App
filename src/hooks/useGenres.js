import { useEffect } from 'react';
import { AJAX } from '../helpers/helpers';

export default function useGenres(mediaType) {
  useEffect(() => {
    async function fetchData() {
      try {
        const results = await AJAX(
          `${API_URL}/genre/${mediaType}/list?api_key=${API_KEY}`
        );
        console.log(results);
      } catch (err) {
        throw err;
      }
    }
    fetchData();
  });
}
