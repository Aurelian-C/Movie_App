import React from 'react';
import classes from './SearchHint.module.css';

export default function SearchHint({ name }) {
  return (
    <li className={classes['header-search__hint']}>
      <div className={classes['header-search__hint-container']}>
        <i
          className={`fa-solid fa-magnifying-glass ${classes['header-search__icon--hint']}`}
        ></i>
        <span className={classes['header-search__hint-name']}>{name}</span>
      </div>
    </li>
  );
}
