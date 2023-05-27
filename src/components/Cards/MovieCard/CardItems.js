import React, { useContext } from 'react';
import CardItem from './CardItem';
import classes from './CardItems.module.css';
import lightBackground from '../../../assets/img/background_for_trending_section_light.png';
import darkBackground from '../../../assets/img/background_for_trending_section_dark.png';
import { ModeDarkContext } from '../../../store/dark-mode';

export default function CardItems({
  children,
  items,
  hasBackground,
  mediaType,
}) {
  const darkModeContext = useContext(ModeDarkContext);

  let backgroundImage = hasBackground
    ? { backgroundImage: `url(${lightBackground})` }
    : '';
  backgroundImage = darkModeContext.darkMode
    ? { backgroundImage: `url(${darkBackground})` }
    : { backgroundImage: `url(${lightBackground})` };

  return (
    <section className={classes['cards-section']}>
      {children}
      <div
        className={`${classes.cards} ${
          hasBackground && classes.cards__background
        }`}
        style={
          hasBackground ? { ...backgroundImage } : { backgroundImage: 'none' }
        }
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
