import { useEffect, useState } from 'react';
import { AJAX, createCardDetails } from '../config/helpers';

export default function usePopular(mediaType) {
  const [items, setItems] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const { results } = await AJAX(
          `${API_URL}${mediaType}/popular?api_key=${API_KEY}`
        );
        return results.map(createCardDetails);
      } catch (err) {
        throw err;
      }
    }
    fetchData();
  });
}
