import classes from './MotionCard.module.css';
import { Link } from 'react-router-dom';

export default function MotionCard({ item, mediaType }) {
  return (
    <Link to={`/${mediaType}/${item.id}`} className={classes.motion__card}>
      <div className={classes.motion__picture}>
        <img
          src={item.poster_path}
          alt={item.title}
          className={classes.motion__image}
          loading="lazy"
        />
        <div className={classes.motion__score}>
          <span>{item.vote_average}</span>
        </div>
      </div>
      <div className={classes.motion__details}>
        <div>
          <h2 className={classes.motion__title}>{item.title}</h2>
          <div>
            <div className={classes.motion__date}>{item.release_date}</div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </Link>
  );
}
