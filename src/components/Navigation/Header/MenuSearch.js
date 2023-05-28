import classes from './MenuSearch.module.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_KEY, API_URL } from '../../../config/config';
import { createSearchedItems } from '../../../config/helpers';

export default function MenuSearch({
  children,
  onSetMenuHintsVisibility,
  onSetSearchedHints,
}) {
  const [inputQuery, setInputQuery] = useState('');
  const navigate = useNavigate();

  async function handleInput(e) {
    setInputQuery(e.target.value);
    const { results } = await searchLoader(e.target.value);
    const searchedItems = createSearchedItems(results);
    // const filteredItems = searchedItems.filter(
    //   item => item.voteCount > 1000 || item.popularity > 50
    // );
    onSetSearchedHints(searchedItems);
    onSetMenuHintsVisibility(true);
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

async function searchLoader(query) {
  const response = await fetch(
    `${API_URL}/search/multi?query=${query}&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
}
