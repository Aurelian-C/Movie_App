import classes from './HeaderDetailsTv.module.css';

export default function HeaderDetailsTv({ motion }) {
  return (
    <div className={classes['header__details']}>
      <div className={classes['header__title']}>
        <h2>{motion.name}</h2>
        <div className={classes['header__facts']}>
          <div>{motion.first_air_date}</div>
          <div className={classes['header__genres']}>
            {motion.genres.map((genre, i) => {
              return i !== motion.genres.length - 1 ? (
                <span key={i}>{genre.name},</span>
              ) : (
                <span key={i}>{genre.name}</span>
              );
            })}
          </div>
          <div>{motion.number_of_episodes} episodes</div>
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
        <div className={classes['header__tagline']}>{motion.tagline}</div>
        <div className={classes['header__overview']}>
          <h3>Overview</h3>
          <p>{motion.overview}</p>
        </div>
      </div>
      <div className={classes.creator}>
        {motion.created_by.map(creator => (
          <div className={classes.creator__person} key={creator.id}>
            <h3>{creator.name}</h3>
            <h4>Creator</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
