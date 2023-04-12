import { useEffect } from 'react';
import { AJAX, createCardDetails } from '../config/helpers';

export default function useTrendings(timeWindow, mediaType, category) {
  useEffect(() => {
    async function fetchData() {
      try {
        const { results } = await AJAX(
          `${API_URL}/${category}/${mediaType}/${timeWindow}?api_key=${API_KEY}`
        );
        return results.map(createCardDetails);
      } catch (err) {
        throw err;
      }
    }
    fetchData();
  });
}
