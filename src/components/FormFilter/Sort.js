import classes from './Sort.module.css';
import { useState } from 'react';
import FilterBox from '../UI/FilterBox';

export default function Sort() {
  const [sortIsVisible, setSortIsVisible] = useState(false);
  const [sortTitle, setSortTitle] = useState('Popularity Descending');
  const [contentIsVisible, setContentIsVisible] = useState(false);

  const handleContentVisibility = () => {
    if (!contentIsVisible) {
      setContentIsVisible(true);
    } else {
      setContentIsVisible(false);
    }
  };

  const handleSortTitle = e => {
    const title = String(e.target.textContent);
    setSortTitle(title);
    setSortIsVisible(false);
  };

  const handleSortVisibility = e => {
    const formLists = document.querySelectorAll(
      `.${classes['form__list-item']}`
    );

    const title = document.querySelector(
      `.${classes['form__sort-title']}`
    ).textContent;
    formLists.forEach(list => {
      list.classList.remove(`${classes.selected}`);
      if (list.textContent === title) {
        list.classList.add(`${classes.selected}`);
      }
    });

    if (!sortIsVisible) {
      setSortIsVisible(true);
    } else {
      setSortIsVisible(false);
    }
  };

  let contentClasses = contentIsVisible
    ? classes.form__content
    : `${classes.form__content} hidden`;

  let sortClasses = sortIsVisible
    ? classes.form__list
    : `${classes.form__list} hidden`;

  return (
    <FilterBox>
      <div className={classes.form__header} onClick={handleContentVisibility}>
        <h3 className={classes['form__header-title']}>Sort</h3>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <div className={contentClasses}>
        <h4 className={classes['form__content-title']}>Sort Results By</h4>
        <div className={classes.form__sort}>
          <div
            className={classes['form__sort-header']}
            onClick={handleSortVisibility}
          >
            <h5 className={classes['form__sort-title']}>{sortTitle}</h5>
            <i className="fa-solid fa-caret-down"></i>
          </div>
          <ul className={sortClasses}>
            <li
              className={classes['form__list-item']}
              onClick={handleSortTitle}
            >
              Popularity Descending
            </li>
            <li
              className={classes['form__list-item']}
              onClick={handleSortTitle}
            >
              Popularity Ascending
            </li>
            <li
              className={classes['form__list-item']}
              onClick={handleSortTitle}
            >
              Rating Descending
            </li>
            <li
              className={classes['form__list-item']}
              onClick={handleSortTitle}
            >
              Rating Ascending
            </li>
            <li
              className={classes['form__list-item']}
              onClick={handleSortTitle}
            >
              Release Date Descending
            </li>
            <li
              className={classes['form__list-item']}
              onClick={handleSortTitle}
            >
              Release Date Ascending
            </li>
            <li
              className={classes['form__list-item']}
              onClick={handleSortTitle}
            >
              Title (A-Z)
            </li>
            <li
              className={classes['form__list-item']}
              onClick={handleSortTitle}
            >
              Title (Z-A)
            </li>
          </ul>
        </div>
      </div>
    </FilterBox>
  );
}
