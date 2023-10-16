import classes from './Search.module.css';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModeDarkContext } from '../../features/darkMode/darkModeContext';

export default function Search() {
  const [inputQuery, setInputQuery] = useState('');
  const navigate = useNavigate();
  const darkModeContext = useContext(ModeDarkContext);

  function handleInput(e) {
    setInputQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`search/${inputQuery}`);
  }

  const classesSearch = darkModeContext.darkMode
    ? classes['search__dark-mode']
    : classes['search__light-mode'];

  return (
    <section id="search">
      <div className={`${classes.search} ${classesSearch}`}>
        <div className={classes.search__container}>
          <div className={classes.search__content}>
            <h2 className={classes.search__title}>Welcome.</h2>
            <span className={classes.search__text}>
              {
                'Millions of movies, TV shows and people to discover. Explore now.'
              }
            </span>
          </div>
          <form className={classes.search__form} onSubmit={handleSubmit}>
            <input
              value={inputQuery}
              onChange={handleInput}
              type="text"
              className={classes.search__input}
              placeholder="Search for a movie, TV show, person ..."
            />
            <button className={classes.search__button} type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
