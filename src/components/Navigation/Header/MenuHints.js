import classes from './MenuHints.module.css';
import SearchHint from './SearchHint';

export default function MenuHints({ searchHints }) {
  return (
    <div className={classes['header-search__content']}>
      <div className={classes['header-search__trending']}>
        <div className={classes['header-search__trending-container']}>
          <i
            className={`fa-arrow-trend-up fa-solid ${classes['header-search__trending-icon']}`}
          ></i>
          <span className={classes['header-search__title']}>Trending</span>
        </div>
      </div>
      <ul className={classes['header-search__hints']}>
        {searchHints.map(item => (
          <SearchHint name={item} key={item} />
        ))}
      </ul>
    </div>
  );
}
