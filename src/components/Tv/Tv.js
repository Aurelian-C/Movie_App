import classes from './Tv.module.css';
import { useContext } from 'react';
import { ModeDarkContext } from '../../store/dark-mode';

export default function Tv({ tvDetail }) {
  const darkModeContext = useContext(ModeDarkContext);
  const light =
    'linear-gradient(to right, rgb(82, 105, 162), rgba(67, 22, 19, 0.6))';
  const dark =
    'linear-gradient(to right, rgba(41, 41, 41, 1), rgba(0, 0, 0,  0.6))';

  let liniarGradient = darkModeContext.darkMode ? dark : light;

  return (
    <div
      className={classes.header}
      style={{
        backgroundImage: `${liniarGradient}, url(${tvDetail.backdrop_path})`,
      }}
    >
      <div className={classes['header__container']}>
        <div className={classes['header__poster']}>
          <img src={tvDetail.poster_path} alt={tvDetail.title} />
        </div>
        <div className={classes['header__details']}>
          <div className={classes['header__title']}>
            <h2>{tvDetail.title}</h2>
            <div className={classes['header__facts']}>
              <div>{tvDetail.release_date}</div>
              <div className={classes['header__genres']}>
                {tvDetail.genres.map((genre, i) => {
                  return i !== tvDetail.genres.length - 1 ? (
                    <span key={i}>{genre.name},</span>
                  ) : (
                    <span key={i}>{genre.name}</span>
                  );
                })}
              </div>
              <div>
                {tvDetail.runtime.hours}h {tvDetail.runtime.minutes}m
              </div>
            </div>
          </div>
          <div className={classes['header__actions']}>
            <div className={classes['header__user-score']}>
              <div className={classes['header__score']}>
                <span>{tvDetail.vote_average}</span>
              </div>
              <div className={classes['header__user']}>User score</div>
            </div>
            <div className={classes['header__buttons']}>
              <button className={classes['header__button']}>
                <i className="fa-regular fa-rectangle-list"></i>
                <div className={classes['header__tooltip']}>
                  Login to create and edit custom list
                </div>
              </button>
              <button className={classes['header__button']}>
                <i className="fa-solid fa-heart"></i>
                <div className={classes['header__tooltip']}>
                  Login to add this movie to your favorite list
                </div>
              </button>
              <button className={classes['header__button']}>
                <i className="fa-solid fa-bookmark"></i>
                <div className={classes['header__tooltip']}>
                  Login to add this movie to your watchlist
                </div>
              </button>
            </div>
          </div>
          <div className={classes['header__info']}>
            <div className={classes['header__tagline']}>{tvDetail.tagline}</div>
            <div className={classes['header__overview']}>
              <h3>Overview</h3>
              <p>{tvDetail.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
