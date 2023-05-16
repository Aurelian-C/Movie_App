import classes from './SideMenu.module.css';
import { Link } from 'react-router-dom';
import SideMenuCategory from './SideMenuCategory';

const sideMenuCategories = {
  movies: [
    { url: '/movie', title: 'Popular' },
    { url: '/movie/top-rated', title: 'Top Rated' },
    { url: '/movie/upcoming', title: 'Upcoming' },
    { url: '/movie/now-playing', title: 'Now Playing' },
  ],
  tvShows: [
    { url: '/tv', title: 'Popular' },
    { url: '/tv/top-rated', title: 'Top Rated' },
    { url: '/tv/on-the-air', title: 'On TV' },
    { url: '/tv/airing-today', title: 'Airing Today' },
  ],
  person: [{ url: '/person', title: 'Popular People' }],
};

const sideMenuLinks = [
  { url: '/documentation/api', title: 'API' },
  { url: '/', title: 'About' },
];

export default function SideMenu({ sideMenuVisibility, onHideSideMenu }) {
  return (
    <div
      className={`${classes['dropdown-menu']} ${
        sideMenuVisibility ? 'mobile-active' : ''
      }`}
    >
      <div className={classes['dropdown-menu__close']} onClick={onHideSideMenu}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <ul className={classes['dropdown-menu__main']}>
        <SideMenuCategory
          categoryTitle="Movies"
          categoryData={sideMenuCategories.movies}
        />
        <SideMenuCategory
          categoryTitle="TV Shows"
          categoryData={sideMenuCategories.tvShows}
        />
        <SideMenuCategory
          categoryTitle="People"
          categoryData={sideMenuCategories.person}
        />
      </ul>
      <ul className={classes['dropdown-menu__secondary']}>
        {sideMenuLinks.map((item, idx) => {
          return (
            <li className={classes['dropdown-menu__extra']} key={idx}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
