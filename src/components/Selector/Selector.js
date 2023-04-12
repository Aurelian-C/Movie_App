import React from 'react';
import classes from './Selector.module.css';

export default function CardSelector({
  mainTitle,
  selectorCategories,
  onGetCategoryTitle,
}) {
  const selectCategoryHandler = e => {
    const targetElement = e.target.closest(`.${classes.selector__item}`);
    const elements = e.currentTarget.querySelectorAll(
      `.${classes.selector__item}`
    );
    elements.forEach(element => {
      element.classList.remove('selected');
    });
    targetElement.classList.add('selected');

    const string = targetElement.dataset.mediaType;
    onGetCategoryTitle(string);
  };

  return (
    <div className={classes.selector}>
      <div className={classes.selector__container}>
        <h3 className={classes.selector__description}>{mainTitle}</h3>
        <div className={classes.selector__wrapper}>
          <ul
            className={classes.selector__items}
            onClick={selectCategoryHandler}
          >
            {selectorCategories.map((title, idx) => {
              if (idx === 0) {
                return (
                  <li
                    key={title}
                    className={`${classes.selector__item} selected`}
                    data-media-type={title.toLowerCase()}
                  >
                    <div className={classes.selector__bg} />
                    <h4 className={classes.selector__title}>{title}</h4>
                  </li>
                );
              } else {
                return (
                  <li
                    key={title}
                    className={classes.selector__item}
                    data-media-type={title.toLowerCase()}
                  >
                    <div className={classes.selector__bg} />
                    <h4 className={classes.selector__title}>{title}</h4>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
