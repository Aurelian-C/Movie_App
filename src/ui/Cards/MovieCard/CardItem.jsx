import classes from './CardItem.module.css';
import { useState } from 'react';
import CardButton from './CardButton';
import CardOverlay from './CardOverlay';
import { Link } from 'react-router-dom';
import { useUser } from '../../../features/authentication/useUser';
import { useAddFavorites } from '../../../features/favorites/useAddFavorites';
import { useRemoveFavorites } from '../../../features/favorites/useRemoveFavorites';
import { useAddWatchlist } from '../../../features/watchlist/useAddWatchlist';
import { useRemoveWatchlist } from '../../../features/watchlist/useRemoveWatchlist';

export default function CardItem({
  image,
  voteAverage,
  title,
  releaseDate,
  id,
  mediaType,
  item,
  favorites,
  watchlist,
}) {
  const [overlayVisibility, setOverlayVisibility] = useState(false);
  const { isAuthenticated, userId } = useUser();
  const { addToFavorites, isLoadingAddToFavorites } = useAddFavorites();
  const { removeFavorite, isLoadingRemoveFavorite } = useRemoveFavorites();
  const { addToWatchlist, isLoadingAddToWatchlist } = useAddWatchlist();
  const { removeWatchlist, isLoadingRemoveWatchlist } = useRemoveWatchlist();

  const isFavorite = favorites?.some(
    favorite => favorite.id === `${userId}--${id}`
  );
  const isWatchlist = watchlist?.some(
    watchlist => watchlist.id === `${userId}--${id}`
  );

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

    if (isFavorite) {
      removeFavorite({ id: item.id, userId });
    } else {
      addToFavorites(motionObject);
    }
  }

  function handleWatchlist(item) {
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

    if (isWatchlist) {
      removeWatchlist({ id: item.id, userId });
    } else {
      addToWatchlist(motionObject);
    }
  }

  function handleOverlayVisibility() {
    if (!overlayVisibility) {
      setOverlayVisibility(true);
    } else {
      setOverlayVisibility(false);
    }
  }

  function handleMouseLeaveCard() {
    setOverlayVisibility(false);
  }

  return (
    <div className={classes.card} onMouseLeave={handleMouseLeaveCard}>
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
            {/* <button className={classes.button}>
              <div className={classes.button__icon}>
                <i className="fa-solid fa-list-ul"></i>
              </div>
              <div className={classes.button__name}>Add to list</div>
            </button> */}

            <button
              className={classes.button}
              onClick={handleFavorites.bind(null, item)}
              disabled={isLoadingAddToFavorites || isLoadingRemoveFavorite}
            >
              <div className={classes.button__icon}>
                {isFavorite && (
                  <i
                    className={`fa-solid fa-heart ${classes.icon__favorite}`}
                  ></i>
                )}
                {!isFavorite && <i className="fa-regular fa-heart"></i>}
              </div>
              <div className={classes.button__name}>Favorites</div>
            </button>

            <button
              className={classes.button}
              onClick={handleWatchlist.bind(null, item)}
              disabled={isLoadingAddToWatchlist || isLoadingRemoveWatchlist}
            >
              <div className={classes.button__icon}>
                {isWatchlist && (
                  <i
                    className={`fa-solid fa-bookmark ${classes.icon__favorite}`}
                  ></i>
                )}
                {!isWatchlist && <i className="fa-regular fa-bookmark"></i>}
              </div>
              <div className={classes.button__name}>Watchlist</div>
            </button>
          </div>
        )}
      </CardOverlay>
      <CardButton
        onToggleOverlayVisibility={handleOverlayVisibility}
        onSetOverlayVisibility={setOverlayVisibility}
      />
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
