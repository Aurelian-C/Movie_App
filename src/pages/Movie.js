import FormFilter from '../components/FormFilter/FormFilter';
import SearchedItems from '../components/SearchedItems/SearchedItems';

export default function MoviePage() {
  return (
    <div style={{ display: 'flex' }}>
      <FormFilter />
      <SearchedItems />
    </div>
  );
}
