import React, { useState } from 'react';
import classes from './Header.module.scss';
import logo1 from '../../../assets/img/tmdb_logo1.svg';
import logo2 from '../../../assets/img/tmdb_logo2.svg';
import HeaderMenuItem from './HeaderMenuItem';
import HeaderSearch from './HeaderSearch';

const menuItems = [
  {
    menuItemTitle: 'Movies',
    menuSubItemTitles: ['Popular', 'Now Playing', 'Upcoming', 'Top Rated'],
  },
  {
    menuItemTitle: 'TV Shows',
    menuSubItemTitles: ['Popular', 'Airing Today', 'On TV', 'Top Rated'],
  },
  {
    menuItemTitle: 'People',
    menuSubItemTitles: ['Popular People'],
  },
  {
    menuItemTitle: 'More',
    menuSubItemTitles: ['Discussions', 'Leaderboard', 'Support', 'API'],
  },
];

const Header = props => {
  const [iconSearchVisibility, setIconSearchVisibility] = useState(true);

  const showIconSearchHandler = () => {
    setIconSearchVisibility(true);
  };

  const hideIconSearchHandler = () => {
    setIconSearchVisibility(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__container}>
        <div className={classes.header__dropdown}>
          <i
            className={`fa-bars fa-solid ${classes['header__dropdown-icon']}`}
            onClick={props.onShowSideMenu}
          ></i>
        </div>
        <div className={classes.header__logo}>
          <a
            href="https://movie-aic.netlify.app"
            className={classes['header__logo--big-screen']}
          >
            <img src={logo1} alt="" className={classes.header__img} />
          </a>
          <a
            href="https://movie-aic.netlify.app"
            className={classes['header__logo--small-screen']}
          >
            <img src={logo2} alt="" className={classes.header__img} />
          </a>
        </div>
        <div
          className={`${classes.header__menu} ${classes['header__menu--1']}`}
        >
          <ul className={classes['header__menu-items']}>
            {menuItems.map(item => (
              <HeaderMenuItem
                title={item.menuItemTitle}
                subTitles={item.menuSubItemTitles}
              />
            ))}
          </ul>
        </div>
        <div
          className={`${classes.header__menu} ${classes['header__menu--2']}`}
        >
          <ul
            className={`${classes['header__menu-items']} ${classes['header__menu-items--1']}`}
          >
            <li className={classes['header__menu-item']}>
              <a href="#" className={classes['header__menu-link']}>
                <i className="fa-plus fa-solid"></i>
              </a>
            </li>
            <li
              className={`${classes['header__menu-item']} ${classes['header__menu-item-language']}`}
            >
              <a href="#" className={classes['header__menu-link']}>
                EN
              </a>
            </li>
            <li className={classes['header__menu-item']}>
              <a href="#" className={classes['header__menu-link']}>
                Login
              </a>
            </li>
            <li className={classes['header__menu-item']}>
              <a href="#" className={classes['header__menu-link']}>
                Join TMDB
              </a>
            </li>
          </ul>
          <ul
            className={`${classes['header__menu-items']} ${classes['header__menu-items--2']}`}
          >
            <li className={classes['header__menu-item']}>
              <a href="#" className={classes['header__menu-link']}>
                <i
                  className={`fa-solid fa-user ${classes['header__mobile-icon']}`}
                ></i>
              </a>
            </li>
          </ul>
          <div
            className={`${classes.header__menu} ${classes['header__menu-search']}`}
          >
            <a href="#" className={classes['header__menu-link']}>
              {iconSearchVisibility && (
                <i
                  className={`fa-magnifying-glass fa-solid ${classes['icon-search']} ${classes['icon-search--open']}`}
                  onClick={hideIconSearchHandler}
                ></i>
              )}
              {iconSearchVisibility || (
                <i
                  className={`fa-solid fa-xmark ${classes['icon-search']} ${classes['icon-search--close']}`}
                  onClick={showIconSearchHandler}
                ></i>
              )}
            </a>
          </div>
        </div>
      </div>
      {iconSearchVisibility || (
        <HeaderSearch trendingItems={props.trendingItems} />
      )}
    </header>
  );
};

export default Header;
