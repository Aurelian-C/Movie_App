import React from 'react';
import classes from './CardSelector.module.scss';

const CardSelector = props => {
  return (
    <div className={classes.selector}>
      <div className={classes.selector__container}>
        <h3 className={classes.selector__description}>{props.mainTitle}</h3>
        <div className={classes.selector__wrapper}>
          <ul className={classes.selector__items}>
            {props.selectorCategories.map((title, idx) => {
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
};

export default CardSelector;
