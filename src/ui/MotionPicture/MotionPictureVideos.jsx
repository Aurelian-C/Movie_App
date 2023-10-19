import classes from './MotionPictureVideos.module.css';
import VideoModal from '../VideoModal/VideoModal';
import { useState } from 'react';

export default function MotionPictureVideos({ videos, videoTypes }) {
  const [overlay, setOverlay] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [filterBy, setFilterBy] = useState('None');

  let renderedVideos;
  if (filterBy === 'None') {
    renderedVideos = videos.results;
  } else {
    renderedVideos = videos.results.filter(video =>
      video.type.includes(filterBy)
    );
  }

  function handleChange(e) {
    setFilterBy(e.target.value);
  }

  function handleOpenModal(video) {
    setModalContent(video);
    setOverlay(true);
  }

  function handleCloseModal() {
    setOverlay(false);
  }

  return (
    <>
      <section className={classes.section}>
        <div className={classes.section__container}>
          <div className={classes.section__actions}>
            <h2 className={classes.section__title}>Videos</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div>Filter by:</div>
              <select
                className={`${classes.select} ${classes['select--white']}`}
                value={filterBy}
                onChange={handleChange}
              >
                {videoTypes.map(option => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={classes.section__cards}>
            {renderedVideos.map(video => (
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
          </div>
        </div>
      </section>

      {overlay && (
        <VideoModal onCloseModal={handleCloseModal} content={modalContent} />
      )}
    </>
  );
}
