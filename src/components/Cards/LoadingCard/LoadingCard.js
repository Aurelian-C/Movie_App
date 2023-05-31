import classes from './LoadingCard.module.css';
import noMovieImage from '../../../assets/img/placeholder_content_img1.jpg';
import noPersonImage from '../../../assets/img/person_with_no_image.png';

export default function LoadingCard({ type }) {
  let image = type !== 'person' ? noMovieImage : noPersonImage;
  let imageClass =
    type !== 'person'
      ? classes['card__image--movie']
      : classes['card__image--person'];

  const cardsArrayNumber = Array.from(Array(10));

  return (
    <>
      {cardsArrayNumber.map((_, i) => (
        <div className={classes.card} key={i}>
          <div className={`${classes.card__image} ${imageClass}`}>
            <img src={image} alt="noTitle" />
          </div>
          <div className={classes.card__content}>
            <div className={classes.card__title}></div>
            <div className={classes.card__date}></div>
          </div>
        </div>
      ))}
    </>
  );
}
