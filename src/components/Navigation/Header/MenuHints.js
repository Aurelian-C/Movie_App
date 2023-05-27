import classes from './MenuHints.module.css';

export default function MenuHints({ children }) {
  return (
    <div className={classes['header-search__content']}>
      <ul className={classes['header-search__hints']}>{children}</ul>
    </div>
  );
}
