import React from 'react';
import CardItem from './CardItem';
import classes from './CardItems.module.css';

export default function CardItems({
  children,
  items,
  hasBackground,
  mediaType,
}) {
  console.log(mediaType);

  return (
    <section className={classes['cards-section']}>
      {children}
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
              id={item.id}
              mediaType={item.mediaType ? item.mediaType : mediaType}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
