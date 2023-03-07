import FilterForm from '../components/FilterForm/FilterForm';
import SearchedItems from '../components/SearchedItems/SearchedItems';

export default function MoviePage() {
  return (
    <div style={{ display: 'flex' }}>
      <FilterForm />
      <SearchedItems />
    </div>
  );
}
