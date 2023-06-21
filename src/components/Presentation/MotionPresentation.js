import { useState } from 'react';
import MotionCard from '../Cards/MotionCard/MotionCard';
import classes from './MotionPresentation.module.css';
import { fetchMotion } from '../../helpers/helpers';
import { createCardDetails } from '../../helpers/helpers';

export default function MotionPresentation({
  data,
  identifier,
  mediaType,
  totalPages,
}) {
  const [presentationItems, setPresentationItems] = useState(data);
  const [pageNumber, setPageNumber] = useState(2);
  const [disableButton, setDisableButton] = useState(false);
  const [showButton, setShowButton] = useState(true);

  async function fetchItems() {
    if (pageNumber === totalPages) {
      setShowButton(false);
      return;
    }

    setDisableButton(true);
    const data = await fetchMotion(mediaType, identifier, pageNumber);
    const results = data.results.map(createCardDetails);
    setPageNumber(pageNumber + 1);
    setPresentationItems([...presentationItems, ...results]);
    setDisableButton(false);
  }

  return (
    <div className={classes.motion}>
      <div className={classes.motion__container}>
        {presentationItems.map(item => (
          <MotionCard item={item} key={item.id} mediaType={mediaType} />
        ))}
      </div>
      {showButton && (
        <button
          className={classes.motion__button}
          onClick={fetchItems}
          disabled={disableButton}
        >
          {disableButton ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
}
