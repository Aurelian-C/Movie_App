import { useState } from 'react';
import classes from './Upcoming.module.css';

export default function Upcoming({ upcomingItems }) {
  const [sectionBackground, setSectionBeckground] = useState(
    upcomingItems[0].backdropImage
  );

  function handleSectionBackground(background) {
    setSectionBeckground(background);
  }

  return (
    <section
      className={classes.upcoming}
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(31, 31, 31, 0.5), rgba(39, 17, 17, 0.5)), url('${sectionBackground}')`,
      }}
    >
      <h2>Upcoming Movies & TVs</h2>
      <div className={classes.upcoming__cards}>
        {upcomingItems.map(item => {
          return (
            <div
              className={classes.upcoming__card}
              key={item.id}
              onMouseOver={handleSectionBackground.bind(
                null,
                item.backdropImage
              )}
            >
              <img
                src={item.backdropImage}
                alt={item.title}
                className={classes.upcoming__image}
              />
              <div className={classes.upcoming__title}>{item.title}</div>
              <div className={classes.upcoming__date}>{item.releaseDate}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
