import classes from './MenuNavigation.module.css';
import MenuLinks from './MenuLinks';

export default function MenuNavigation() {
  return (
    <ul className={classes['header__menu-items']}>
      <MenuLinks />
    </ul>
  );
}
