import { Link } from 'react-router-dom';
import SectionPageSecondary from '../UI/SectionWrapper/SectionPageSecondary';
import classes from './PersonCredits.module.css';

export default function PersonCredits({ cast }) {
  const eliminateDuplicates = [];
  cast.forEach(movie => {
    const include = eliminateDuplicates.some(item => item.id === movie.id);
    if (!include) eliminateDuplicates.push(movie);
  });

  const castFormat = eliminateDuplicates
    .map(movie => {
      const date = movie.release_date || movie.first_air_date;
      const year = new Date(date).getFullYear();
      const title = movie.title || movie.name;

      return {
        ...movie,
        releaseYear: year,
        title: title,
      };
    })
    .sort((a, b) => {
      if (a.releaseYear < b.releaseYear) return 1;
      if (a.releaseYear > b.releaseYear) return -1;
      return 0;
    });

  const castYearsSet = new Set(castFormat.map(movie => movie.releaseYear));
  const castYears = Array(...castYearsSet)
    .filter(year => {
      if (!Number.isNaN(year)) return year;
    })
    .sort((a, b) => {
      if (a < b) return 1;
      if (a > b) return -1;
      return 0;
    });

  return (
    <SectionPageSecondary>
      <h2>Credits</h2>
      <div className={classes.credits}>
        <h3 className={classes.credits__title}>
          Acting - ({castFormat.length})
        </h3>
        {castYears.map(year => {
          return (
            <div key={year} className={classes.credits__row}>
              <h4 className={classes.credits__year}>{year}</h4>
              <div className={classes.credits__container}>
                {castFormat.map(movie => {
                  if (movie.releaseYear === year) {
                    return (
                      <Link
                        to={`/${movie.media_type}/${movie.id}`}
                        key={movie.id}
                        className={classes.box}
                      >
                        <img
                          src={movie.poster_path}
                          alt={movie.title}
                          className={classes.box__image}
                        />
                        <div className={classes.box__info}>
                          <h4 className={classes.box__title}>{movie.title}</h4>
                          <h5 className={classes.box__character}>
                            {movie.character}
                          </h5>
                        </div>
                      </Link>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </SectionPageSecondary>
  );
}
