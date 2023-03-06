import React from 'react';
import classes from './HeaderSearch.module.css';
import HeaderSearchHint from './HeaderSearchHint';

const HeaderSearch = props => {
  return (
    <div className={`${classes['header-search']}`}>
      <div className={classes['header-search__form-container']}>
        <form className={classes['header-search__form']}>
          <i
            className={`fa-magnifying-glass fa-solid ${classes['header-search__icon']}`}
          ></i>
          <label
            htmlFor="header-search__input"
            className={classes['header-search__label']}
          ></label>
          <input
            type="text"
            id="header-search__input"
            className={classes['header-search__input']}
            placeholder="Search for a movie, TV show, person ..."
          />
        </form>
      </div>
      <div className={classes['header-search__content']}>
        <div className={classes['header-search__trending']}>
          <div className={classes['header-search__trending-container']}>
            <i
              className={`fa-arrow-trend-up fa-solid ${classes['header-search__trending-icon']}`}
            ></i>
            <span className={classes['header-search__title']}>Trending</span>
          </div>
        </div>
        <ul className={classes['header-search__hints']}>
          {props.searchHints.map(item => (
            <HeaderSearchHint name={item} key={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(HeaderSearch);
