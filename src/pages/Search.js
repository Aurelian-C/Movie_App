import SearchedQueries from '../components/SearchedQueries/SearchedQueries';
import { useLoaderData } from 'react-router-dom';
import { createSearchedItems } from '../helpers/helpers';

export default function SearchPage() {
  const items = useLoaderData();
  const itemsDetails = createSearchedItems(items.results);

  return <SearchedQueries items={itemsDetails} />;
}
