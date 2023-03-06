import React from 'react';
import classes from './HeaderSearchHint.module.css';

const HeaderSearchHint = props => {
  return (
    <li className={classes['header-search__hint']}>
      <div className={classes['header-search__hint-container']}>
        <i
          className={`fa-solid fa-magnifying-glass ${classes['header-search__icon--hint']}`}
        ></i>
        <span className={classes['header-search__hint-name']}>
          {props.name}
        </span>
      </div>
    </li>
  );
};

export default HeaderSearchHint;
