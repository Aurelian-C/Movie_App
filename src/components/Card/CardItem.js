import React from 'react';
import CardButton from './CardButton';
import classes from './CardItem.module.css';

const CardItem = props => {
  return (
    <div className={classes.card}>
      <div className={`${classes.card__overlay} hidden`} />
      <CardButton />
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

export default CardItem;
