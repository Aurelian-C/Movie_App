import classes from './CardButton.module.css';
import { useRef, useEffect } from 'react';

export default function CardButton({
  onToggleOverlayVisibility,
  onSetOverlayVisibility,
}) {
  const buttonRef = useRef();

  function handleOutsideClick(e) {
    const isContain = buttonRef.current.contains(e.target);
    if (!isContain) {
      onSetOverlayVisibility(false);
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={classes.card__circle}
      onClick={onToggleOverlayVisibility}
      ref={buttonRef}
    >
      <button className={classes.card__button}>
        <i className={`fa-solid fa-circle ${classes.card__dot}`} />
        <i className={`fa-solid fa-circle ${classes.card__dot}`} />
        <i className={`fa-solid fa-circle ${classes.card__dot}`} />
      </button>
    </div>
  );
}
