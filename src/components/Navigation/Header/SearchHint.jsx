import React from 'react';
import classes from './SearchHint.module.css';
import { Link } from 'react-router-dom';

export default function SearchHint({
  onSetMenuHintsVisibility,
  name,
  mediaType,
  id,
}) {
  let icon = (
    <i
      className={`fa-solid fa-film ${classes['header-search__icon--hint']}`}
    ></i>
  );

  if (mediaType === 'tv') {
    icon = (
      <i
        className={`fa-solid fa-tv ${classes['header-search__icon--hint']}`}
      ></i>
    );
  }

  if (mediaType === 'person') {
    icon = (
      <i
        className={`fa-regular fa-user ${classes['header-search__icon--hint']}`}
      ></i>
    );
  }

  function handleClick() {
    onSetMenuHintsVisibility(false);
  }

  return (
    <li className={classes['header-search__hint']}>
      <Link
        to={`/${mediaType}/${id}`}
        className={classes['header-search__anchor']}
        onClick={handleClick}
      >
        {icon}
        <span className={classes['header-search__hint-name']}>{name}</span>
      </Link>
    </li>
  );
}
