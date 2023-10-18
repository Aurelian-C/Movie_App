import Select from './Select';
import { useSearchParams } from 'react-router-dom';

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get('sortBy') || '';

  function handleChange(e) {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div>Sort by:</div>
      <Select options={options} onChange={handleChange} value={sortBy} />
    </div>
  );
}

export default SortBy;
