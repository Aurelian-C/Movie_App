import classes from './Movie.module.css';

export default function Movie({
  title,
  backdropImage,
  posterImage,
  releaseDate,
}) {
  return (
    <div
      className={classes.header}
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(169, 208, 214, 1), rgba(141, 203, 214, 0.5)), url(${backdropImage})`,
      }}
    >
      <div className={classes['header__container']}>
        <div className={classes['header__poster']}>
          <img src={posterImage} alt={title} />
        </div>
        <div className={classes['header__details']}>
          <div className={classes['header__title']}>
            <h2>{title}</h2>
            <div className={classes['header__facts']}>
              <span>{releaseDate}</span>
            </div>
          </div>
          <div className={classes['header__actions']}></div>
          <div className={classes['header__info']}></div>
        </div>
      </div>
    </div>
  );
}
