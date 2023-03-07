import classes from './CardItem.module.css';
import CardOverlay from './CardOverlay';
import { Link } from 'react-router-dom';

const CardItem = props => {
  return (
    <div className={classes.card}>
      <CardOverlay />
      <div className={classes.card__image}>
        <Link href="/" className={classes['card__image-anchor']}>
          <img
            src={props.image}
            alt="The Chronicles of Narnia: The Lion, the Witch and the Wardrobe"
          />
        </Link>
      </div>
      <div className={classes.card__content}>
        <div className={classes.card__score}>{props.voteAverage}</div>
        <div className={classes.card__title}>
          <Link href="/" className={classes['card__title-anchor']}>
            {props.title}
          </Link>
        </div>
        <div className={classes.card__date}>{props.releaseDate}</div>
      </div>
    </div>
  );
};

export default CardItem;
