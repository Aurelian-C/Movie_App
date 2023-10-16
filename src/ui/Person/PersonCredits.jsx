import { Link } from 'react-router-dom';
import SectionPageSecondary from '../../ui/SectionWrappers/SectionPageSecondary';
import classes from './PersonCredits.module.css';
import { useState } from 'react';

export default function PersonCredits({ cast, crew }) {
  const [motionCategory, setMotionCategory] = useState('all');
  const [departmentCategory, setDepartmentCategory] = useState('Acting');

  // Cast code
  const eliminateCastDuplicates = [];
  cast.forEach(movie => {
    const include = eliminateCastDuplicates.some(item => item.id === movie.id);
    if (!include) eliminateCastDuplicates.push(movie);
  });

  const howManyMovies = eliminateCastDuplicates.filter(
    movie => movie.media_type === 'movie'
  ).length;
  const howManyTvShows = eliminateCastDuplicates.filter(
    movie => movie.media_type === 'tv'
  ).length;

  const castFormat = eliminateCastDuplicates
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
      return null;
    })
    .sort((a, b) => {
      if (a.releaseYear < b.releaseYear) return 1;
      if (a.releaseYear > b.releaseYear) return -1;
      return 0;
    });

  const castYearsSet = new Set(castFormat.map(movie => movie.releaseYear));
  const castYears = Array.from(castYearsSet)
    .filter(year => {
      if (!Number.isNaN(year)) return year;
      return null;
    })
    .sort((a, b) => {
      if (a < b) return 1;
      if (a > b) return -1;
      return 0;
    });

  function handleMotionCategory(e) {
    const { category } = e.target.dataset;
    setMotionCategory(category);
    setDepartmentCategory('Acting');
  }

  function resetMotionCategory() {
    setMotionCategory('all');
    setDepartmentCategory('Acting');
  }

  // Crew code
  const eliminateCrewDuplicates = [];
  crew.forEach(movie => {
    const include = eliminateCrewDuplicates.some(item => item.id === movie.id);
    if (!include) eliminateCrewDuplicates.push(movie);
  });
  const crewFormat = eliminateCrewDuplicates.map(item => {
    const date = item.release_date || item.first_air_date;
    const year = new Date(date).getFullYear();

    return {
      ...item,
      releaseYear: year,
    };
  });

  const departments = [];
  crewFormat.forEach(item => {
    const department = item.department;
    const exist = departments.some(dep => dep.department === department);

    if (!exist) {
      departments.push({
        department: item.department,
        count: 1,
      });
    } else {
      const idx = departments.findIndex(dep => dep.department === department);
      departments[idx].count++;
    }
  });

  if (eliminateCastDuplicates.length > 0)
    departments.push({
      department: 'Acting',
      count: eliminateCastDuplicates.length,
    });

  departments.sort((a, b) => {
    if (a.department < b.department) return -1;
    if (a.department > b.department) return 1;
    return 0;
  });

  const filteredCrew = crewFormat.filter(
    item => item.department.toLowerCase() === departmentCategory.toLowerCase()
  );
  const crewRawYears = [];
  filteredCrew.forEach(item => {
    const containtYear = filteredCrew.some(item => item === item.releaseYear);
    if (!containtYear) crewRawYears.push(item.releaseYear);
  });
  // let eliminateDuplicateCrewYear;
  const eliminateDuplicateCrewYear = new Set(crewRawYears);
  const crewYears = Array.from(eliminateDuplicateCrewYear)
    .filter(year => {
      if (!Number.isNaN(year)) return year;
      return null;
    })
    .sort((a, b) => {
      if (a < b) return 1;
      if (a > b) return -1;
      return 0;
    });

  function handleDepartment(e) {
    const { department } = e.target.dataset;
    setDepartmentCategory(department);
  }

  let renderedArray = filteredCrew.length > 0 ? filteredCrew : castFormat;
  let renderedYears = filteredCrew.length > 0 ? crewYears : castYears;
  let renderButton =
    motionCategory !== 'all' || departmentCategory !== 'Acting';

  return (
    <SectionPageSecondary>
      <h2>Credits</h2>
      <div className={classes.credits}>
        <div className={classes.credits__selection}>
          <h3 className={classes.credits__title}>{departmentCategory}</h3>
          {renderButton && (
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
                {departments.map(item => (
                  <li
                    className={classes.credits__category}
                    key={item.department}
                    data-department={item.department}
                    onClick={handleDepartment}
                  >
                    {item.department} <span>{item.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {renderedYears.map(year => {
          return (
            <div key={year} className={classes.credits__row}>
              <h4 className={classes.credits__year}>{year}</h4>
              <div className={classes.credits__container}>
                {renderedArray.map(movie => {
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
                            {movie.character || movie.job}
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
