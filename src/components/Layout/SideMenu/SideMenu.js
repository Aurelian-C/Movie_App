import React, { useState } from 'react';
import classes from './SideMenu.module.scss';

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
        props.sideMenuVisibility && 'mobile-active'
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
            <li className={classes['dropdown-menu__extra']}>Popular</li>
            <li className={classes['dropdown-menu__extra']}>Top Rated</li>
            <li className={classes['dropdown-menu__extra']}>Upcoming</li>
            <li className={classes['dropdown-menu__extra']}>Now Playing</li>
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
            <li className={classes['dropdown-menu__extra']}>Popular</li>
            <li className={classes['dropdown-menu__extra']}>Top Rated</li>
            <li className={classes['dropdown-menu__extra']}>On TV</li>
            <li className={classes['dropdown-menu__extra']}>Airing Today</li>
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
            <li className={classes['dropdown-menu__extra']}>Popular People</li>
          </ul>
        </li>
      </ul>
      <ul className={classes['dropdown-menu__secondary']}>
        <li className={classes['dropdown-menu__extra']}>Contribution Bible</li>
        <li className={classes['dropdown-menu__extra']}>Apps</li>
        <li className={classes['dropdown-menu__extra']}>Discussions</li>
        <li className={classes['dropdown-menu__extra']}>Leaderboard</li>
        <li className={classes['dropdown-menu__extra']}>Contribute</li>
        <li className={classes['dropdown-menu__extra']}>API</li>
        <li className={classes['dropdown-menu__extra']}>Support</li>
        <li className={classes['dropdown-menu__extra']}>About</li>
      </ul>
      <ul className={classes['dropdown-menu__secondary']}>
        <li className={classes['dropdown-menu__extra']}>Login</li>
      </ul>
    </div>
  );
};

export default SideMenu;
