import classes from './MenuHints.module.css';
import SearchHint from './SearchHint';

export default function MenuHints({ searchedHints }) {
  const hints = searchedHints.slice(0, 10);
  return (
    <div className={classes['header-search__content']}>
      <ul className={classes['header-search__hints']}>
        {hints.map(item => (
          <SearchHint name={item.title} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
