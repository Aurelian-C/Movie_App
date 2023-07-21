import classes from './SideMenu.module.css';
import { Link } from 'react-router-dom';
import SideMenuCategory from './SideMenuCategory';
import { menuCategories } from '../../../config/config';

const sideMenuLinks = [
  {
    url: 'https://developer.themoviedb.org/reference/intro/getting-started',
    title: 'API',
  },
  { url: '/', title: 'About' },
];

export default function SideMenu({ sideMenuVisibility, onHideSideMenu }) {
  return (
    <div
      className={`${classes['dropdown-menu']} ${
        sideMenuVisibility ? 'mobile-active' : ''
      }`}
    >
      <div className={classes['dropdown-menu__actions']}>
        <div
          className={classes['dropdown-menu__close']}
          onClick={onHideSideMenu}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>

      <ul className={classes['dropdown-menu__main']}>
        <SideMenuCategory
          categoryTitle="Movies"
          categoryData={menuCategories.movies}
          onHideSideMenu={onHideSideMenu}
        />
        <SideMenuCategory
          categoryTitle="TV Shows"
          categoryData={menuCategories.tvShows}
          onHideSideMenu={onHideSideMenu}
        />
        <SideMenuCategory
          categoryTitle="People"
          categoryData={menuCategories.person}
          onHideSideMenu={onHideSideMenu}
        />
      </ul>
      <ul className={classes['dropdown-menu__secondary']}>
        {sideMenuLinks.map((item, idx) => {
          return (
            <li className={classes['dropdown-menu__extra']} key={idx}>
              <Link to={item.url} onClick={onHideSideMenu}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
