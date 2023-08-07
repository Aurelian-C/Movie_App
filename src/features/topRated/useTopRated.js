import { useEffect, useState } from 'react';
import { createCardDetails } from '../../helpers/helpers';
import { API_URL, API_KEY } from '../../config/config';

export default function useTopRated(mediaType) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${API_URL}/${mediaType}/top_rated?api_key=${API_KEY}`
        );
        const { results } = await response.json();
        const cardDetails = results.map(createCardDetails);
        setItems(cardDetails);
      } catch (err) {
        throw err;
      }
    }
    if (mediaType) {
      fetchData();
    }
  }, [mediaType]);

  return items;
}
