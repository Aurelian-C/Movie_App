import classes from './HeaderMenuItem.module.css';
import { Link } from 'react-router-dom';

const HeaderMenuItem = () => {
  return (
    <>
      <li className={classes['header__menu-item']}>
        <h2 className={classes['header__menu-title']}>Movies</h2>
        <div className={classes['header__menu-container-extras']}>
          <ul className={classes['header__menu-extras']}>
            <li className={classes['header__menu-extra']}>
              <Link to="/movie" className={classes['header__menu-link']}>
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
              <Link to="/tv" className={classes['header__menu-link']}>
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
              <Link to="/person" className={classes['header__menu-link']}>
                Popular People
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li className={classes['header__menu-item']}>
        <h2 className={classes['header__menu-title']}>More</h2>
        <div className={classes['header__menu-container-extras']}>
          <ul className={classes['header__menu-extras']}>
            <li className={classes['header__menu-extra']}>
              <Link to="discuss" className={classes['header__menu-link']}>
                Discussions
              </Link>
            </li>
            <li className={classes['header__menu-extra']}>
              <Link to="leaderboard" className={classes['header__menu-link']}>
                Leaderboard
              </Link>
            </li>
            <li className={classes['header__menu-extra']}>
              <Link to="talk" className={classes['header__menu-link']}>
                Support
              </Link>
            </li>
            <li className={classes['header__menu-extra']}>
              <Link
                to="documentation/api"
                className={classes['header__menu-link']}
              >
                API
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};

export default HeaderMenuItem;
