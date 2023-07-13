import classes from './MenuLinks.module.css';
import { Link } from 'react-router-dom';
import { menuCategories } from '../../../config/config';

export default function MenuLinks() {
  return (
    <>
      <li className={classes['header__menu-item']}>
        <h2 className={classes['header__menu-title']}>Movies</h2>
        <div className={classes['header__menu-container-extras']}>
          <ul className={classes['header__menu-extras']}>
            {menuCategories.movies.map(item => {
              return (
                <li className={classes['header__menu-extra']} key={item.url}>
                  <Link to={item.url} className={classes['header__menu-link']}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </li>
      <li className={classes['header__menu-item']}>
        <h2 className={classes['header__menu-title']}>TV Shows</h2>
        <div className={classes['header__menu-container-extras']}>
          <ul className={classes['header__menu-extras']}>
            {menuCategories.tvShows.map(item => {
              return (
                <li className={classes['header__menu-extra']} key={item.url}>
                  <Link to={item.url} className={classes['header__menu-link']}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </li>
      <li className={classes['header__menu-item']}>
        <h2 className={classes['header__menu-title']}>People</h2>
        <div className={classes['header__menu-container-extras']}>
          <ul className={classes['header__menu-extras']}>
            {menuCategories.person.map(item => {
              return (
                <li className={classes['header__menu-extra']} key={item.url}>
                  <Link to={item.url} className={classes['header__menu-link']}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </li>
    </>
  );
}
