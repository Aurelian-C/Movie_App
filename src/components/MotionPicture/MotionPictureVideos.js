import classes from './MotionPictureVideos.module.css';
import SectionGrid from '../UI/SectionWrapper/SectionGrid';
import VideoModal from '../VideoModal/VideoModal';
import { useState } from 'react';

export default function MotionPictureVideos({ videos }) {
  const [overlay, setOverlay] = useState(false);
  const [modalContent, setModalContent] = useState();

  function handleOpenModal(video) {
    setModalContent(video);
    setOverlay(true);
  }

  function handleCloseModal() {
    setOverlay(false);
  }

  return (
    <>
      <SectionGrid sectionTitle={'Videos'}>
        {videos.results.map(video => (
          <div
            key={video.id}
            className={classes.video}
            style={{
              backgroundImage: `url('https://i.ytimg.com/vi/${video.key}/hqdefault.jpg')`,
            }}
            onClick={handleOpenModal.bind(null, video)}
          >
            <button className={classes.video__button}>
              <i className="fa-solid fa-play"></i>
            </button>
          </div>
        ))}
      </SectionGrid>
      {overlay && (
        <VideoModal onCloseModal={handleCloseModal} content={modalContent} />
      )}
    </>
  );
}
