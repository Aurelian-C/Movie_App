import classes from './MotionCardFavorites.module.css';
import { useRemoveFavorites } from '../../../features/favorites/useRemoveFavorites';

export default function MotionCardFavorites({ motionDetail }) {
  const { removeFavorite } = useRemoveFavorites();

  function handleRemoveFavorite(id) {
    removeFavorite(id);
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
          <div className={classes.card__button}>
            <button id="button-favorites">
              <i className="fa-solid fa-heart"></i>
            </button>
            <label htmlFor="button-favorites">Add to favorites</label>
          </div>
          <div className={classes.card__button}>
            <button
              id="button-remove"
              onClick={handleRemoveFavorite.bind(null, motionDetail.id)}
            >
              <i className="fa-regular fa-trash-can"></i>
            </button>
            <label htmlFor="button-remove">Remove</label>
          </div>
        </div>
      </div>
    </div>
  );
}
