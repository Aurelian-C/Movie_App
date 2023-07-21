import classes from './MenuContainer.module.css';

export default function MenuContainer({ className, children }) {
  return (
    <div className={`${classes.header__menu} ${className}`}>{children}</div>
  );
}
