import { useEffect, useState } from 'react';
import { createCardDetails } from '../helpers/helpers';
import { API_URL, API_KEY } from '../config/config';

export default function useTrendings(mediaType, timeWindow = 'day') {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${API_URL}/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}`
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
  }, [mediaType, timeWindow]);

  return items;
}
