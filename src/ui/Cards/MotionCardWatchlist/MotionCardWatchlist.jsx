import classes from './MotionCardWatchlist.module.css';
import { useUser } from '../../../features/authentication/useUser';
import { useAddFavorites } from '../../../features/favorites/useAddFavorites';
import { useRemoveFavorites } from '../../../features/favorites/useRemoveFavorites';
import { useRemoveWatchlist } from '../../../features/watchlist/useRemoveWatchlist';

export default function MotionCardWatchlist({ motionDetail, favorites }) {
  const { userId } = useUser();
  const { addToFavorites, isLoadingAddToFavorites } = useAddFavorites();
  const { removeFavorite, isLoadingRemoveFavorite } = useRemoveFavorites();
  const { removeWatchlist } = useRemoveWatchlist();

  const isFavorite = favorites?.some(
    favorite => favorite.id === motionDetail.id
  );

  function handleFavorites(motion) {
    if (isFavorite) {
      removeFavorite(motion.id);
    } else {
      const motionObject = {
        id: motion.id,
        title: motion.title,
        vote_average: motion.vote_average,
        release_date: motion.release_date,
        genres: null,
        backdrop_path: motion.backdrop_path,
        poster_path: motion.poster_path,
        overview: motion.overview,
        runtime: null,
        media_type: motion.media_Type,
        user_id: userId,
      };

      addToFavorites({ ...motionObject, user_id: userId });
    }
  }

  function handleRemoveWatchlist(id) {
    removeWatchlist(id);
  }

  return (
    <div className={classes.card}>
      <div className={classes.card__image}>
        <img
          className={classes.card__img}
          src={motionDetail.poster_path}
          alt={motionDetail.title}
          loading="lazy"
        />
      </div>

      <div className={classes.card__body}>
        <div className={classes.card__header}>
          <div className={classes.card__user}>
            <div className={classes.card__score}>
              <span>{motionDetail.vote_average}</span>
            </div>
            <div className={classes['card__user-score']}>User score</div>
          </div>
          <div>
            <h2 className={classes.card__title}>{motionDetail.title}</h2>
            <div className={classes.card__date}>
              {motionDetail.release_date}
            </div>
          </div>
        </div>
        <div className={classes.card__overview}>{motionDetail.overview}</div>

        <div className={classes.card__buttons}>
          <button
            className={classes.card__button}
            onClick={handleFavorites.bind(null, motionDetail)}
          >
            {isFavorite && (
              <i className={`fa-solid fa-heart ${classes.icon__favorite}`}></i>
            )}
            {!isFavorite && <i className="fa-regular fa-heart"></i>}
          </button>
          <button
            className={classes.card__button}
            onClick={handleRemoveWatchlist.bind(null, motionDetail.id)}
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
