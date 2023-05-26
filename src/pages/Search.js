import SearchedQueries from '../components/SearchedQueries/SearchedQueries';
import { API_KEY, API_URL } from '../config/config';
import { useLoaderData } from 'react-router-dom';
import { createSearchedItems } from '../config/helpers';

export default function SearchPage() {
  const items = useLoaderData();
  const itemsDetails = createSearchedItems(items.results);

  return <SearchedQueries items={itemsDetails} />;
}

export async function searchLoader({ params }) {
  const response = await fetch(
    `${API_URL}/search/multi?query=${params.query}&api_key=${API_KEY}`
  );

  return response;
}
