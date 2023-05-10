import { useState } from 'react';
import CardButton from './CardButton';
import classes from './CardOverlay.module.css';

export default function CardOverlay() {
  const [overlayVisibility, setOverlayVisibility] = useState(false);

  function handleOverlayVisibility() {
    if (!overlayVisibility) {
      setOverlayVisibility(true);
    } else {
      setOverlayVisibility(false);
    }
  }

  let overlayClass = overlayVisibility
    ? `${classes.card__overlay}`
    : `${classes.card__overlay} hidden`;

  return (
    <div>
      <div className={overlayClass}></div>
      <CardButton
        onToggleOverlayVisibility={handleOverlayVisibility}
        onSetOverlayVisibility={setOverlayVisibility}
      />
    </div>
  );
}
