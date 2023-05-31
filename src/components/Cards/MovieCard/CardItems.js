import React, { useContext } from 'react';
import CardItem from './CardItem';
import classes from './CardItems.module.css';
import lightBackground from '../../../assets/img/background_for_trending_section_light.png';
import darkBackground from '../../../assets/img/background_for_trending_section_dark.png';
import { ModeDarkContext } from '../../../store/dark-mode';
import LoadingCard from '../LoadingCard/LoadingCard';

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
          {items.length === 0 && <LoadingCard />}
          {items.map(item => (
            <CardItem
              key={item.id}
              image={item.poster_path}
              title={item.title}
              voteAverage={item.vote_average}
              releaseDate={item.release_date}
              id={item.id}
              mediaType={item.media_type ? item.media_type : mediaType}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
