import classes from './MenuLogin.module.css';
import { Link } from 'react-router-dom';

export default function MenuLogin() {
  return (
    <ul
      className={`${classes['header__menu-items']} ${classes['header__menu-items--1']}`}
    >
      <li className={classes['header__menu-item']}>
        <Link to="/" className={classes['header__menu-link']}>
          <i className="fa-plus fa-solid"></i>
        </Link>
      </li>
      <li
        className={`${classes['header__menu-item']} ${classes['header__menu-item-language']}`}
      >
        <Link to="/" className={classes['header__menu-link']}>
          EN
        </Link>
      </li>
      <li className={classes['header__menu-item']}>
        <Link to="/" className={classes['header__menu-link']}>
          Login
        </Link>
      </li>
      <li className={classes['header__menu-item']}>
        <Link to="/" className={classes['header__menu-link']}>
          Join TMDB
        </Link>
      </li>
    </ul>
  );
}