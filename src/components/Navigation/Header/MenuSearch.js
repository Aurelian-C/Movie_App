import classes from './MenuSearch.module.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MenuSearch({ children, onSetMenuHintsVisibility }) {
  const [inputQuery, setInputQuery] = useState('');
  const navigate = useNavigate();

  function handleInput(e) {
    setInputQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`search/${inputQuery}`);
    onSetMenuHintsVisibility(false);
  }

  return (
    <div className={`${classes['header-search']}`}>
      <div className={classes['header-search__form-container']}>
        <form
          className={classes['header-search__form']}
          onSubmit={handleSubmit}
        >
          <i
            className={`fa-magnifying-glass fa-solid ${classes['header-search__icon']}`}
          ></i>
          <label
            htmlFor="header-search__input"
            className={classes['header-search__label']}
          ></label>
          <input
            value={inputQuery}
            onChange={handleInput}
            type="text"
            id="header-search__input"
            className={classes['header-search__input']}
            placeholder="Search for a movie, TV show, person ..."
          />
        </form>
      </div>
      {children}
    </div>
  );
}
