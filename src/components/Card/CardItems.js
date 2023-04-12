import React from 'react';
import CardItem from './CardItem';
import Selector from '../Selector/Selector';
import classes from './CardItems.module.css';

export default function CardItems({ items, mainTitle, selectorCategories }) {
  const trendingTitle = mainTitle.toLowerCase();

  return (
    <section className={classes['cards-section']}>
      <div>
        <Selector
          selectorCategories={selectorCategories}
          mainTitle={mainTitle}
        />
      </div>
      <div>
        <div
          className={`${classes.cards} ${
            trendingTitle === 'trendings' && classes.cards__background
          }`}
        >
          <div className={classes.cards__container}>
            {items.map(item => (
              <CardItem
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
}
