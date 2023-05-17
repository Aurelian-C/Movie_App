import classes from './CardOverlay.module.css';
import { useRef } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

export default function CardOverlay({ overlayVisibility }) {
  let overlayClass = overlayVisibility
    ? `${classes.card__overlay}`
    : `${classes.card__overlay} hidden`;

  return (
    <>
      <div className={overlayClass}></div>
    </>
  );
}
