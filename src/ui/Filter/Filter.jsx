import classes from './Filter.module.css';
import { useSearchParams } from 'react-router-dom';

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilterButton = searchParams.get(filterField) || options[0].value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get('page')) searchParams.set('page', 1);
    setSearchParams(searchParams);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div>Category:</div>
      <div className={classes.filter}>
        {options.map(option => (
          <button
            className={`${classes.filter__button} ${
              activeFilterButton === option.value
                ? classes['filter__button--active']
                : ''
            }`}
            onClick={() => handleClick(option.value)}
            key={option.label}
            disabled={activeFilterButton === option.value}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;
