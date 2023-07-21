import { useState } from 'react';
import classes from './PersonPresentation.module.css';
import { createPersonsList, fetchMotion } from '../../helpers/helpers';
import PersonListCard from '../Cards/PersonsListCard/PersonListCard';

export default function PersonPresentation({
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
    const results = createPersonsList(data.results);
    setPageNumber(pageNumber + 1);
    setPresentationItems([...presentationItems, ...results]);
    setDisableButton(false);
  }

  return (
    <div className={classes.person}>
      <div className={classes.person__container}>
        {presentationItems.map(person => (
          <PersonListCard
            person={person}
            key={person.id}
            mediaType={mediaType}
          />
        ))}
      </div>
      {showButton && (
        <button
          className={classes.person__button}
          onClick={fetchItems}
          disabled={disableButton}
        >
          {disableButton ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
}
