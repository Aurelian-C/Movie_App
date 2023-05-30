import classes from './VideoModal.module.css';
import { createPortal } from 'react-dom';

function Overlay({ onCloseModal }) {
  return <div className={classes.overlay} onClick={onCloseModal}></div>;
}

function Video({ content }) {
  console.log(content);

  return (
    <div className={classes.video}>
      <h2>{content.name}</h2>
      <iframe src={`https://www.youtube.com/embed/${content.key}`}></iframe>
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
        <Video content={content} />,
        document.getElementById('youtube')
      )}
    </>
  );
}
