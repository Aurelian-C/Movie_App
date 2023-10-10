import classes from './MenuAccount.module.css';
import { Link } from 'react-router-dom';

export default function MenuAccount() {
  return (
    <ul
      className={`${classes['header__menu-items']} ${classes['header__menu-items--2']}`}
    >
      <li className={classes['header__menu-item']}>
        <Link to="/login" className={classes['header__menu-link']}>
          <i
            className={`fa-solid fa-user ${classes['header__mobile-icon']}`}
          ></i>
        </Link>
      </li>
    </ul>
  );
}
