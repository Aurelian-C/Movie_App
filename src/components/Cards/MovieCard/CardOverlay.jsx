import classes from './CardOverlay.module.css';

export default function CardOverlay({ overlayVisibility }) {
  let overlayClass = overlayVisibility
    ? `${classes.card__overlay}`
    : `${classes.card__overlay} hidden`;

  return (
    <>
      <div className={overlayClass}>
        <div className={classes.card__info}>
          <h2>Want to rate or add this item to a list?</h2>
          <button className={classes.card__login}>
            <h3>Login</h3>
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>
      </div>
    </>
  );
}
