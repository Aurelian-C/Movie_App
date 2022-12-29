import React from 'react';
import HeaderMenuSubItem from './HeaderMenuSubItem';
import classes from './HeaderMenuItem.module.scss';

const HeaderMenuItem = props => {
  return (
    <li className={classes['header__menu-item']}>
      <a href="#" className={classes['header__menu-link']}>
        {props.title}
      </a>
      <div className={classes['header__menu-container-extras']}>
        <ul className={classes['header__menu-extras']}>
          {props.subTitles.map(name => (
            <HeaderMenuSubItem name={name} />
          ))}
        </ul>
      </div>
    </li>
  );
};

export default HeaderMenuItem;
