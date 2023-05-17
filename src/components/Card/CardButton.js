import classes from './CardButton.module.css';

export default function CardButton({ onToggleOverlayVisibility }) {
  return (
    <div className={classes.card__circle} onClick={onToggleOverlayVisibility}>
      <button className={classes.card__button}>
        <i className={`fa-solid fa-circle ${classes.card__dot}`} />
        <i className={`fa-solid fa-circle ${classes.card__dot}`} />
        <i className={`fa-solid fa-circle ${classes.card__dot}`} />
      </button>
    </div>
  );
}
