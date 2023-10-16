import classes from './CardOverlay.module.css';

export default function CardOverlay({ overlayVisibility, children }) {
  let overlayClass = overlayVisibility
    ? `${classes.card__overlay}`
    : `${classes.card__overlay} hidden`;

  return (
    <>
      <div className={overlayClass}>
        <div className={classes.card__info}>{children}</div>
      </div>
    </>
  );
}
