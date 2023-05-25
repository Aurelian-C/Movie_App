import SearchedQueries from '../components/SearchedQueries/SearchedQueries';
import { API_KEY } from '../config/config';
import { useLoaderData } from 'react-router-dom';
import { createSearchedItems } from '../config/helpers';

export default function SearchPage() {
  const items = useLoaderData();
  const itemsDetails = createSearchedItems(items.results);

  return <SearchedQueries items={itemsDetails} />;
}

export async function searchLoader({ params }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${params.query}&api_key=${API_KEY}`
  );

  return response;
}
