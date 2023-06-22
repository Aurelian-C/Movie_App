import classes from './MenuLinks.module.css';
import { Link } from 'react-router-dom';

export default function MenuLinks() {
  return (
    <>
      <li className={classes['header__menu-item']}>
        <h2 className={classes['header__menu-title']}>Movies</h2>
        <div className={classes['header__menu-container-extras']}>
          <ul className={classes['header__menu-extras']}>
            <li className={classes['header__menu-extra']}>
              <Link
                to="/movie/popular"
                className={classes['header__menu-link']}
              >
                Popular
              </Link>
            </li>
            <li className={classes['header__menu-extra']}>
              <Link
                to="/movie/now-playing"
                className={classes['header__menu-link']}
              >
                Now Playing
              </Link>
            </li>
            <li className={classes['header__menu-extra']}>
              <Link
                to="/movie/upcoming"
                className={classes['header__menu-link']}
              >
                Upcoming
              </Link>
            </li>
            <li className={classes['header__menu-extra']}>
              <Link
                to="/movie/top-rated"
                className={classes['header__menu-link']}
              >
                Top Rated
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li className={classes['header__menu-item']}>
        <h2 className={classes['header__menu-title']}>TV Shows</h2>
        <div className={classes['header__menu-container-extras']}>
          <ul className={classes['header__menu-extras']}>
            <li className={classes['header__menu-extra']}>
              <Link to="/tv/popular" className={classes['header__menu-link']}>
                Popular
              </Link>
            </li>
            <li className={classes['header__menu-extra']}>
              <Link
                to="/tv/airing-today"
                className={classes['header__menu-link']}
              >
                Airing Today
              </Link>
            </li>
            <li className={classes['header__menu-extra']}>
              <Link
                to="/tv/on-the-air"
                className={classes['header__menu-link']}
              >
                On TV
              </Link>
            </li>
            <li className={classes['header__menu-extra']}>
              <Link to="/tv/top-rated" className={classes['header__menu-link']}>
                Top Rated
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li className={classes['header__menu-item']}>
        <h2 className={classes['header__menu-title']}>People</h2>
        <div className={classes['header__menu-container-extras']}>
          <ul className={classes['header__menu-extras']}>
            <li className={classes['header__menu-extra']}>
              <Link
                to="/person/popular"
                className={classes['header__menu-link']}
              >
                Popular People
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
}
