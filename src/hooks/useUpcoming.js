import { useEffect, useState } from 'react';
import { createCardDetails } from '../config/helpers';
import { API_URL, API_KEY } from '../config/config';

const getDateString = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const dayOfMonth = today.getDate();
  return `${year}-${month}-${dayOfMonth}`;
};

export default function useUpcoming(mediaType) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const today = getDateString();
    async function fetchData() {
      try {
        const response = await fetch(
          `${API_URL}/discover/movie?page=1&primary_release_date.gte=${today}&sort_by=popularity.desc&api_key=${API_KEY}`
        );
        const { results } = await response.json();
        const cardDetails = results.map(createCardDetails);
        console.log(cardDetails);
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
