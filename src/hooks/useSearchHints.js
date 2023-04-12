import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../config/config';
import { AJAX } from '../config/helpers';

const createSearchHints = result => {
  return `${result.title || result.name || result.original_name}`;
};

export default function useSearchHints(category, mediaType, timeWindow) {
  const [searchHints, setSearchHints] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { results } = await AJAX(
          `${API_URL}/${category}/${mediaType}/${timeWindow}?api_key=${API_KEY}`
        );
        const state = results.map(createSearchHints).slice(0, 10);
        setSearchHints(state);
      } catch (err) {
        throw err;
      }
    }
    fetchData();
  }, [searchHints]);

  return searchHints;
}
