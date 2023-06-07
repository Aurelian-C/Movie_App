import { Link } from 'react-router-dom';
import SectionPageSecondary from '../UI/SectionWrapper/SectionPageSecondary';
import classes from './PersonCredits.module.css';
import { useState } from 'react';

export default function PersonCredits({ cast }) {
  const [motionCategory, setMotionCategory] = useState('all');
  // const [departmentCategory, setDepartmentCategory] = useState('acting');

  const eliminateDuplicates = [];
  cast.forEach(movie => {
    const include = eliminateDuplicates.some(item => item.id === movie.id);
    if (!include) eliminateDuplicates.push(movie);
  });

  const howManyMovies = eliminateDuplicates.filter(
    movie => movie.media_type === 'movie'
  ).length;
  const howManyTvShows = eliminateDuplicates.filter(
    movie => movie.media_type === 'tv'
  ).length;

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
    .filter(movie => {
      if (motionCategory === 'all') return movie;
      if (motionCategory === movie.media_type) return movie;
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

  function handleMotionCategory(e) {
    const { category } = e.target.dataset;
    setMotionCategory(category);
  }

  function resetMotionCategory() {
    setMotionCategory('all');
  }

  return (
    <SectionPageSecondary>
      <h2>Credits</h2>
      <div className={classes.credits}>
        <div className={classes.credits__selection}>
          <h3 className={classes.credits__title}>Acting</h3>
          {motionCategory !== 'all' && (
            <button
              onClick={resetMotionCategory}
              className={classes.credits__reset}
            >
              Clear
            </button>
          )}
          <div className={classes.credits__actions}>
            <div className={classes.credits__action}>
              <div className={classes.credits__department}>
                <h4>All</h4>
                <i
                  className={`fa-solid fa-sort-down ${classes.credits__icon}`}
                ></i>
              </div>
              <ul className={classes.credits__sort}>
                <li
                  className={classes.credits__category}
                  data-category="movie"
                  onClick={handleMotionCategory}
                >
                  Movies <span>{howManyMovies}</span>
                </li>
                <li
                  className={classes.credits__category}
                  data-category="tv"
                  onClick={handleMotionCategory}
                >
                  TV Shows <span>{howManyTvShows}</span>
                </li>
              </ul>
            </div>
            <div className={classes.credits__action}>
              <div className={classes.credits__department}>
                <h4>Department</h4>
                <i
                  className={`fa-solid fa-sort-down ${classes.credits__icon}`}
                ></i>
              </div>
              <ul className={classes.credits__sort}>
                <li className={classes.credits__category}>Acting</li>
                <li className={classes.credits__category}>Production</li>
                <li className={classes.credits__category}>Crew</li>
                <li className={classes.credits__category}>Directing</li>
              </ul>
            </div>
          </div>
        </div>

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
