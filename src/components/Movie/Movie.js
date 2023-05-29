import classes from './Movie.module.css';
import { useContext } from 'react';
import { ModeDarkContext } from '../../store/dark-mode';
import SectionSecondary from '../UI/SectionWrapper/SectionSecondary';

export default function Movie({ movieDetail }) {
  const darkModeContext = useContext(ModeDarkContext);
  const light =
    'linear-gradient(to right, rgb(82, 105, 162), rgba(67, 22, 19, 0.6))';
  const dark =
    'linear-gradient(to right, rgba(41, 41, 41, 1), rgba(0, 0, 0,  0.6))';

  let liniarGradient = darkModeContext.darkMode ? dark : light;

  console.log(movieDetail);

  return (
    <>
      <div
        className={classes.header}
        style={{
          backgroundImage: `${liniarGradient}, url(${movieDetail.backdrop_path})`,
        }}
      >
        <div className={classes['header__container']}>
          <div className={classes['header__poster']}>
            <img src={movieDetail.poster_path} alt={movieDetail.title} />
          </div>
          <div className={classes['header__details']}>
            <div className={classes['header__title']}>
              <h2>{movieDetail.title}</h2>
              <div className={classes['header__facts']}>
                <div>{movieDetail.release_date}</div>
                <div className={classes['header__genres']}>
                  {movieDetail.genres.map((genre, i) => {
                    return i !== movieDetail.genres.length - 1 ? (
                      <span key={i}>{genre.name},</span>
                    ) : (
                      <span key={i}>{genre.name}</span>
                    );
                  })}
                </div>
                <div>
                  {movieDetail.runtime.hours}h {movieDetail.runtime.minutes}m
                </div>
              </div>
            </div>
            <div className={classes['header__actions']}>
              <div className={classes['header__user-score']}>
                <div className={classes['header__score']}>
                  <span>{movieDetail.vote_average}</span>
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
      {/* <SectionSecondary>
        <div className={classes.details}>
          <div>
            <div>Status</div>
            <div>{movieDetail.status}</div>
          </div>
          <div>
            <div>Budget</div>
            <div>{movieDetail.budget}</div>
          </div>
          <div>
            <div>Revenue</div>
            <div>{movieDetail.revenue}</div>
          </div>
        </div>
      </SectionSecondary> */}
    </>
  );
}
