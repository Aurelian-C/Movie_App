import classes from './MenuPhone.module.css';
import { Link } from 'react-router-dom';

export default function MenuPhone() {
  return (
    <ul
      className={`${classes['header__menu-items']} ${classes['header__menu-items--2']}`}
    >
      <li className={classes['header__menu-item']}>
        <Link to="/" className={classes['header__menu-link']}>
          <i
            className={`fa-solid fa-user ${classes['header__mobile-icon']}`}
          ></i>
        </Link>
      </li>
    </ul>
  );
}
