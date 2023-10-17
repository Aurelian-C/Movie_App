import { useState } from 'react';
import CardButton from './CardButton';
import classes from './CardItem.module.css';
import CardOverlay from './CardOverlay';
import { Link } from 'react-router-dom';
import { useUser } from '../../../features/authentication/useUser';
import { useAddFavorites } from '../../../features/favorites/useAddFavorites';

export default function CardItem({
  image,
  voteAverage,
  title,
  releaseDate,
  id,
  mediaType,
  item,
}) {
  const [buttonIsShown, setButtonIsShown] = useState(false);
  const [overlayVisibility, setOverlayVisibility] = useState(false);
  const { isAuthenticated, userId } = useUser();
  const { addToFavorites, isLoadingAddToFavorites } = useAddFavorites();

  function handleFavorites(item) {
    const motionObject = {
      id: item.id,
      title: item.title,
      vote_average: item.vote_average,
      release_date: item.release_date,
      genres: null,
      backdrop_path: item.backdrop_path,
      poster_path: item.poster_path,
      overview: item.overview,
      runtime: null,
      media_type: mediaType,
      user_id: userId,
    };
    addToFavorites(motionObject);
  }

  function handleOverlayVisibility() {
    if (!overlayVisibility) {
      setOverlayVisibility(true);
    } else {
      setOverlayVisibility(false);
    }
  }

  function handleMouseOverCard() {
    setButtonIsShown(true);
  }
  function handleMouseLeaveCard() {
    setButtonIsShown(false);
    setOverlayVisibility(false);
  }

  return (
    <div
      className={classes.card}
      onMouseOver={handleMouseOverCard}
      onMouseLeave={handleMouseLeaveCard}
    >
      <CardOverlay overlayVisibility={overlayVisibility}>
        {!isAuthenticated && (
          <div>
            <h2>Want to add this item to a list?</h2>
            <Link to="/login" className={classes.card__login}>
              <h3>Login</h3>
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </Link>
          </div>
        )}
        {isAuthenticated && (
          <div className={classes.card__buttons}>
            <button className={classes.button}>
              <div className={classes.button__icon}>
                <i className="fa-solid fa-list-ul"></i>
              </div>
              <div className={classes.button__name}>Add to list</div>
            </button>

            <button
              className={classes.button}
              onClick={handleFavorites.bind(null, item)}
              disabled={isLoadingAddToFavorites}
            >
              <div className={classes.button__icon}>
                <i className="fa-solid fa-heart"></i>
              </div>
              <div className={classes.button__name}>Favorites</div>
            </button>

            <button className={classes.button}>
              <div className={classes.button__icon}>
                <i className="fa-regular fa-bookmark"></i>
              </div>
              <div className={classes.button__name}>Watchlist</div>
            </button>
          </div>
        )}
      </CardOverlay>
      {buttonIsShown && (
        <CardButton
          onToggleOverlayVisibility={handleOverlayVisibility}
          onSetOverlayVisibility={setOverlayVisibility}
        />
      )}
      <div className={classes.card__image}>
        <Link
          to={`/${mediaType}/${id}`}
          className={classes['card__image-anchor']}
        >
          <img src={image} alt={title} loading="lazy" />
        </Link>
      </div>
      <div className={classes.card__content}>
        <div className={classes.card__score}>{voteAverage}</div>
        <div className={classes.card__title}>
          <Link to={`/movie/${id}`} className={classes['card__title-anchor']}>
            {title}
          </Link>
        </div>
        <div className={classes.card__date}>{releaseDate}</div>
      </div>
    </div>
  );
}
