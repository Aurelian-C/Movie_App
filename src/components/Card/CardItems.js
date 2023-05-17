import React, { useState } from 'react';
import CardItem from './CardItem';
import classes from './CardItems.module.css';
import usePopular from '../../hooks/usePopular';
import useTrendings from '../../hooks/useTrendings';

export default function CardItems({ children, word, hasBackground }) {
  const items = usePopular(word);
  console.log(items);

  return (
    <section className={classes['cards-section']}>
      <div>{children}</div>
      <div>
        <div
          className={`${classes.cards} ${
            hasBackground && classes.cards__background
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
