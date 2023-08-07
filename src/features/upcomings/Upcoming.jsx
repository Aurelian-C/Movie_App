import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Upcoming.module.css';
import { ModeDarkContext } from '../darkMode/darkModeContext';

export default function Upcoming({ upcomingItems }) {
  const [sectionBackground, setSectionBeckground] = useState(
    () => upcomingItems[0]?.backdropImage
  );
  const { darkMode } = useContext(ModeDarkContext);

  function handleSectionBackground(background) {
    setSectionBeckground(background);
  }

  const liniarGradientLight = `linear-gradient(180deg, 
    rgba(10, 13, 20, 0.7) 0%, 
    rgba(0, 0, 0, 0.2) 25%, 
    rgba(0, 0, 0, 0) 50%,  
    rgba(0, 0, 0, 0.3) 75%, 
    rgba(10, 13, 20, 0.7) 100%)`;

  const liniarGradientDark = `linear-gradient(180deg, 
    rgba(0, 0, 0, 0.9) 0%, 
    rgba(0, 0, 0, 0.6) 25%, 
    rgba(0, 0, 0, 0.6) 50%,  
    rgba(0, 0, 0, 0.7) 75%, 
    rgba(0, 0, 0, 0.8) 100%)`;

  let liniarGradient = darkMode ? liniarGradientDark : liniarGradientLight;

  return (
    <section
      className={classes.upcoming}
      style={{
        backgroundImage: `${liniarGradient},  url('${sectionBackground}')`,
      }}
    >
      <div className={classes.upcoming__overlay}>
        <h3>Upcoming Movies & TVs</h3>
        <div className={classes.upcoming__cards}>
          {upcomingItems.map(item => {
            const iconType =
              item.mediaType === 'movie' ? (
                <i className={`fa-solid fa-film ${classes.upcoming__icon}`}></i>
              ) : (
                <i className={`fa-solid fa-tv ${classes.upcoming__icon}`}></i>
              );

            return (
              <Link
                to={`/${item.mediaType}/${item.id}`}
                className={classes.upcoming__card}
                key={item.id}
                onMouseOver={handleSectionBackground.bind(
                  null,
                  item.backdropImage
                )}
              >
                <div className={classes.upcoming__backdrop}>
                  <img
                    src={item.backdropImage}
                    alt={item.title}
                    className={classes.upcoming__image}
                  />
                  <div className={classes.upcoming__media}>
                    {iconType}{' '}
                    <div className={classes.upcoming__type}>
                      {item.mediaType}
                    </div>
                  </div>
                </div>

                <div className={classes.upcoming__title}>{item.title}</div>
                <div className={classes.upcoming__date}>{item.releaseDate}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
