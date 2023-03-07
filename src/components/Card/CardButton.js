import classes from './CardButton.module.css';

const CardButton = props => {
  return (
    <div
      className={classes.card__circle}
      onClick={props.onToggleOverlayVisibility}
    >
      <button className={classes.card__button}>
        <span className={classes.card__dots}>
          <i className="fa-solid fa-circle" />
          <i className="fa-solid fa-circle" />
          <i className="fa-solid fa-circle" />
        </span>
      </button>
    </div>
  );
};

export default CardButton;
