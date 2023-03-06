import React from 'react';
import classes from './Search.module.css';

const Search = () => {
  return (
    <section id="search">
      <div className={classes.search}>
        <div className={classes.search__container}>
          <div className={classes.search__content}>
            <h2 className={classes.search__title}>Welcome.</h2>
            <span className={classes.search__text}>
              {
                'Millions of movies, TV shows and people to discover. Explore now.'
              }
            </span>
          </div>
          <form className={classes.search__form}>
            <input
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
};

export default Search;
