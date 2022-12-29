import React from 'react';
import classes from './CardItem.module.scss';

const CartItem = props => {
  return (
    <div className={classes.card}>
      <div className={`${classes.card__overlay} hidden`} />
      <div className={classes.card__circle}>
        <button className={classes.card__button}>
          <span className={classes.card__dots}>
            <i className="fa-solid fa-circle" />
            <i className="fa-solid fa-circle" />
            <i className="fa-solid fa-circle" />
          </span>
        </button>
      </div>
      <div className={classes.card__image}>
        <a href="#" className={classes['card__image-anchor']}>
          <img
            src={props.image}
            alt="The Chronicles of Narnia: The Lion, the Witch and the Wardrobe"
          />
        </a>
      </div>
      <div className={classes.card__content}>
        <div className={classes.card__score}>{props.voteAverage}</div>
        <div className={classes.card__title}>
          <a href="#" className={classes['card__title-anchor']}>
            {props.title}
          </a>
        </div>
        <div className={classes.card__date}>{props.releaseDate}</div>
      </div>
    </div>
  );
};

export default CartItem;
