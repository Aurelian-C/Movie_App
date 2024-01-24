import classes from './HeaderDetailsMovie.module.css';
import { useUser } from '../../../features/authentication/useUser';
import { useAddFavorites } from '../../../features/favorites/useAddFavorites';
import { useReadFavorites } from '../../../features/favorites/useReadFavorites';
import { useRemoveFavorites } from '../../../features/favorites/useRemoveFavorites';
import { useAddWatchlist } from '../../../features/watchlist/useAddWatchlist';
import { useReadWatchlist } from '../../../features/watchlist/useReadWatchlist';
import { useRemoveWatchlist } from '../../../features/watchlist/useRemoveWatchlist';
import { useLocation } from 'react-router-dom';

export default function HeaderDetailsMovie({ motion }) {
  const { isAuthenticated, userId } = useUser();
  const location = useLocation();
  const mediaType = location.pathname.split('/')[1];

  const { addToFavorites, isLoadingAddToFavorites } = useAddFavorites();
  const { removeFavorite, isLoadingRemoveFavorite } = useRemoveFavorites();
  const { favorites } = useReadFavorites();

  const { addToWatchlist, isLoadingAddToWatchlist } = useAddWatchlist();
  const { removeWatchlist, isLoadingRemoveWatchlist } = useRemoveWatchlist();
  const { watchlist } = useReadWatchlist();

  const isFavorite = favorites?.some(
    favorite => favorite.id === `${userId}--${motion.id}`
  );
  const isWatchlist = watchlist?.some(
    watchlist => watchlist.id === `${userId}--${motion.id}`
  );

  function handleFavorites(motion) {
    if (isFavorite) {
      removeFavorite({ id: motion.id, userId });
    } else {
      addToFavorites({ ...motion, media_type: mediaType, user_id: userId });
    }
  }

  function handleWatchlist(motion) {
    if (isWatchlist) {
      removeWatchlist({ id: motion.id, userId });
    } else {
      addToWatchlist({ ...motion, media_type: mediaType, user_id: userId });
    }
  }

  return (
    <div className={classes['header__details']}>
      <div className={classes['header__title']}>
        <h2>{motion.title}</h2>
        <div className={classes['header__facts']}>
          <div>{motion.release_date}</div>
          <div className={classes['header__genres']}>
            {motion.genres.map((genre, i) => {
              return i !== motion.genres.length - 1 ? (
                <span key={i}>{genre.name},</span>
              ) : (
                <span key={i}>{genre.name}</span>
              );
            })}
          </div>
          <div>
            {motion.runtime.hours > 0 && `${motion.runtime.hours}h`}{' '}
            {motion.runtime.minutes}m
          </div>
        </div>
      </div>
      <div className={classes['header__actions']}>
        <div className={classes['header__user-score']}>
          <div className={classes['header__score']}>
            <span>{motion.vote_average}</span>
          </div>
          <div className={classes['header__user']}>User score</div>
        </div>
        <div className={classes['header__buttons']}>
          {/* <button
            className={classes['header__button']}
            disabled={!isAuthenticated}
          >
            <i className="fa-regular fa-rectangle-list"></i>
            <div className={classes['header__tooltip']}>
              {isAuthenticated
                ? 'Add to list'
                : 'Login to create and edit custom list'}
            </div>
          </button> */}
          <button
            className={classes['header__button']}
            disabled={
              !isAuthenticated ||
              isLoadingAddToFavorites ||
              isLoadingRemoveFavorite
            }
            onClick={handleFavorites.bind(null, motion)}
          >
            {isFavorite && (
              <i className={`fa-solid fa-heart ${classes.icon__favorite}`}></i>
            )}
            {!isFavorite && <i className="fa-regular fa-heart"></i>}
            {!isAuthenticated && (
              <div className={classes['header__tooltip']}>
                Login to add this movie to your favorite list
              </div>
            )}
            {!isFavorite && isAuthenticated && (
              <div className={classes['header__tooltip']}>Mark as favorite</div>
            )}
          </button>
          <button
            className={classes['header__button']}
            disabled={
              !isAuthenticated ||
              isLoadingAddToWatchlist ||
              isLoadingRemoveWatchlist
            }
            onClick={handleWatchlist.bind(null, motion)}
          >
            {isWatchlist && (
              <i
                className={`fa-solid fa-bookmark ${classes.icon__favorite}`}
              ></i>
            )}
            {!isWatchlist && <i className="fa-regular fa-bookmark"></i>}
            {!isAuthenticated && (
              <div className={classes['header__tooltip']}>
                Login to add this movie to your watchlist
              </div>
            )}
            {!isWatchlist && isAuthenticated && (
              <div className={classes['header__tooltip']}>
                Add to your watchlist
              </div>
            )}
          </button>
        </div>
      </div>
      <div className={classes['header__info']}>
        <div className={classes['header__tagline']}>{motion.tagline}</div>
        <div className={classes['header__overview']}>
          <h3>Overview</h3>
          <p>{motion.overview}</p>
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.info__item}>
          <h3>Status</h3>
          <h4>{motion.status}</h4>
        </div>
        <div className={classes.info__item}>
          <h3>Budget</h3>
          <h4>{motion.budget}</h4>
        </div>
        <div className={classes.info__item}>
          <h3>Revenue</h3>
          <h4>{motion.revenue}</h4>
        </div>
      </div>
    </div>
  );
}
