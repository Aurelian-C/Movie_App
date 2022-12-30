import React from 'react';
import CartItem from './CardItem';
import Selector from '../Selector/Selector';
import classes from './CardItems.module.scss';

const CardItems = props => {
  const trendingTitle = props.mainTitle.toLowerCase();

  return (
    <section className={classes['cards-section']}>
      <div>
        <Selector
          selectorCategories={props.selectorCategories}
          mainTitle={props.mainTitle}
        />
      </div>
      <div>
        <div
          className={`${classes.cards} ${
            trendingTitle === 'trendings' && classes.cards__background
          }`}
        >
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
