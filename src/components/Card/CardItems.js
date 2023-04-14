import React, { useState } from 'react';
import CardItem from './CardItem';
import classes from './CardItems.module.css';
import usePopular from '../../hooks/usePopular';

export default function CardItems({
  mainTitle,
  children,
  word,
  hasBackground,
}) {
  const trendingTitle = mainTitle.toLowerCase();
  const items = usePopular(word);

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
