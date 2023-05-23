import classes from './Movie.module.css';

export default function Movie({ movieDetail }) {
  console.log(movieDetail);
  return (
    <div
      className={classes.header}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(69, 109, 115, 1), rgba(0, 0, 0,  0.5)), url(${movieDetail.backdropImage})`,
      }}
    >
      <div className={classes['header__container']}>
        <div className={classes['header__poster']}>
          <img src={movieDetail.posterImage} alt={movieDetail.title} />
        </div>
        <div className={classes['header__details']}>
          <div className={classes['header__title']}>
            <h2>{movieDetail.title}</h2>
            <div className={classes['header__facts']}>
              <div>{movieDetail.releaseDate}</div>
              <div className={classes['header__genres']}>
                {movieDetail.genres.map((genre, i) => {
                  return i !== movieDetail.genres.length - 1 ? (
                    <span>{genre.name},</span>
                  ) : (
                    <span>{genre.name}</span>
                  );
                })}
              </div>
              <div>{movieDetail.runtime} minutes</div>
            </div>
          </div>
          <div className={classes['header__actions']}></div>
          <div className={classes['header__info']}>
            <div className={classes['header__tagline']}>
              {movieDetail.tagline}
            </div>
            <div className={classes['header__overview']}>
              <h3>Overview</h3>
              <p>{movieDetail.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
