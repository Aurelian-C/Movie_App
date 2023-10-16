import classes from './VideoModal.module.css';
import { createPortal } from 'react-dom';

function Overlay({ onCloseModal }) {
  return <div className={classes.overlay} onClick={onCloseModal}></div>;
}

function Video({ content, onCloseModal }) {
  return (
    <div className={classes.video}>
      <h2 className={classes.video__title}>
        {content.name}
        <i
          className={`fa-regular fa-circle-xmark ${classes.video__icon}`}
          onClick={onCloseModal}
        ></i>
      </h2>
      <iframe
        src={`https://www.youtube.com/embed/${content.key}`}
        title={content.name}
      ></iframe>
    </div>
  );
}

export default function VideoModal({ onCloseModal, content }) {
  return (
    <>
      {createPortal(
        <Overlay onCloseModal={onCloseModal} />,
        document.getElementById('overlay')
      )}
      {createPortal(
        <Video content={content} onCloseModal={onCloseModal} />,
        document.getElementById('youtube')
      )}
    </>
  );
}
