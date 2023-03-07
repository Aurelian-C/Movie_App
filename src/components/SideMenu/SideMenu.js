import classes from './SideMenu.module.css';
import { Link } from 'react-router-dom';

const SideMenu = props => {
  const dropdownVisibilityHandler = e => {
    const title = e.target;
    const extrasContainer = title
      .closest(`.${classes['dropdown-menu__item']}`)
      .querySelector(`.${classes['dropdown-menu__container-extras']}`);
    extrasContainer.classList.toggle('hidden');
  };

  return (
    <div
      className={`${classes['dropdown-menu']} ${
        props.sideMenuVisibility ? 'mobile-active' : ''
      }`}
    >
      <div
        className={classes['dropdown-menu__close']}
        onClick={props.onHideSideMenu}
      >
        <i className="fa-solid fa-xmark"></i>
      </div>
      <ul className={classes['dropdown-menu__main']}>
        <li className={classes['dropdown-menu__item']}>
          <h3
            className={classes['dropdown-menu__title']}
            onClick={dropdownVisibilityHandler}
          >
            Movies
          </h3>
          <ul
            className={`${classes['dropdown-menu__container-extras']} hidden`}
          >
            <li className={classes['dropdown-menu__extra']}>
              <Link to="/movie">Popular</Link>
            </li>
            <li className={classes['dropdown-menu__extra']}>
              <Link to="/movie/top-rated">Top Rated</Link>
            </li>
            <li className={classes['dropdown-menu__extra']}>
              <Link to="/movie/upcoming">Upcoming</Link>
            </li>
            <li className={classes['dropdown-menu__extra']}>
              <Link to="/movie/now-playing">Now Playing</Link>
            </li>
          </ul>
        </li>
        <li className={classes['dropdown-menu__item']}>
          <h3
            className={classes['dropdown-menu__title']}
            onClick={dropdownVisibilityHandler}
          >
            TV Shows
          </h3>
          <ul
            className={`${classes['dropdown-menu__container-extras']} hidden`}
          >
            <li className={classes['dropdown-menu__extra']}>
              <Link to="/tv">Popular</Link>
            </li>
            <li className={classes['dropdown-menu__extra']}>
              <Link to="/tv/top-rated">Top Rated</Link>
            </li>
            <li className={classes['dropdown-menu__extra']}>
              <Link to="/tv/on-the-air">On TV</Link>
            </li>
            <li className={classes['dropdown-menu__extra']}>
              <Link to="/tv/airing-today">Airing Today</Link>
            </li>
          </ul>
        </li>
        <li className={classes['dropdown-menu__item']}>
          <h3
            className={classes['dropdown-menu__title']}
            onClick={dropdownVisibilityHandler}
          >
            People
          </h3>
          <ul
            className={`${classes['dropdown-menu__container-extras']} hidden`}
          >
            <li className={classes['dropdown-menu__extra']}>
              <Link to="/person">Popular People</Link>
            </li>
          </ul>
        </li>
      </ul>
      <ul className={classes['dropdown-menu__secondary']}>
        <li className={classes['dropdown-menu__extra']}>
          <Link to="/">Contribution Bible</Link>
        </li>
        <li className={classes['dropdown-menu__extra']}>
          <Link to="/">Apps</Link>
        </li>
        <li className={classes['dropdown-menu__extra']}>
          <Link to="/discuss">Discussions</Link>
        </li>
        <li className={classes['dropdown-menu__extra']}>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li className={classes['dropdown-menu__extra']}>
          <Link to="/">Contribute</Link>
        </li>
        <li className={classes['dropdown-menu__extra']}>
          <Link to="/documentation/api">API</Link>
        </li>
        <li className={classes['dropdown-menu__extra']}>
          <Link to="/talk">Support</Link>
        </li>
        <li className={classes['dropdown-menu__extra']}>
          <Link to="/">About</Link>
        </li>
      </ul>
      <ul className={classes['dropdown-menu__secondary']}>
        <li className={classes['dropdown-menu__extra']}>Login</li>
      </ul>
    </div>
  );
};

export default SideMenu;
