import React, { useState } from 'react';
import CardItem from './CardItem';
import Selector from '../Selector/Selector';
import classes from './CardItems.module.css';

const CardItems = props => {
  const [items, setItems] = useState(props.items);
  const trendingTitle = props.mainTitle.toLowerCase();

  const fetchData = async string => {
    const items = await props.onFetch(string, 'all', 'trending');
    setItems(items);
  };

  return (
    <section className={classes['cards-section']}>
      <div>
        <Selector
          selectorCategories={props.selectorCategories}
          mainTitle={props.mainTitle}
          onFetch={fetchData}
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
};

export default CardItems;
