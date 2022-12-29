import React from 'react';
import CartItem from './CardItem';
import CardSelector from './CardSelector';
import classes from './CardItems.module.scss';

const CardItems = props => {
  return (
    <section className={classes['cards-section']}>
      <div>
        <CardSelector
          selectorCategories={props.selectorCategories}
          mainTitle={props.mainTitle}
        />
      </div>
      <div>
        <div className={classes.cards}>
          <div className={classes.cards__container}>
            {props.items.map(item => (
              <CartItem
                key={item.id}
                image={item.posterImage}
                title={item.title}
                voteAverage={item.voteAverage}
                releaseDate={item.releaseDate}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardItems;
