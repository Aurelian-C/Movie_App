import { useState } from 'react';
import CardButton from './CardButton';
import classes from './CardItem.module.css';
import CardOverlay from './CardOverlay';
import { Link } from 'react-router-dom';

const CardItem = props => {
  const [buttonIsShown, setButtonIsShown] = useState(false);
  const [overlayVisibility, setOverlayVisibility] = useState(false);

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
      <CardOverlay overlayVisibility={overlayVisibility} />
      {buttonIsShown && (
        <CardButton
          onToggleOverlayVisibility={handleOverlayVisibility}
          onSetOverlayVisibility={setOverlayVisibility}
        />
      )}
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
