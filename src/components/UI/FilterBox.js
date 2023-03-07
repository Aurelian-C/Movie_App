import classes from './FilterBox.module.css';

export default function FilterBox({ children }) {
  return <div className={classes.form__box}>{children}</div>;
}
