import PersonCard from '../../Cards/PersonCard/PersonCard';
import MotionPictureCollections from '../MotionPictureCollections';
import MotionPictureHeader from '../MotionPictureHeader';
import MotionPictureProductionCompanies from '../MotionPictureProductionCompanies';
import MotionPictureVideos from '../MotionPictureVideos';
import LoadingCards from '../../Cards/LoadingCard/LoadingCards';
import { Suspense } from 'react';
import { Await } from 'react-router-dom';
import { createCastDetails } from '../../../config/helpers';
import HeaderDetailsMovie from './HeaderDetailsMovie';

export default function MotionPictureMovie({
  motion,
  credits,
  collection,
  videos,
}) {
  return (
    <>
      <MotionPictureHeader motion={{ ...motion }}>
        <HeaderDetailsMovie motion={{ ...motion }} />
      </MotionPictureHeader>
      <Suspense fallback={<LoadingCards type="person" />}>
        <Await resolve={credits}>
          {credits => {
            const castDetail = createCastDetails(credits.cast);
            return <PersonCard cast={castDetail} />;
          }}
        </Await>
      </Suspense>
      <MotionPictureProductionCompanies motion={{ ...motion }} />
      <MotionPictureCollections collection={collection} />
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={videos}>
          {video => <MotionPictureVideos videos={video} />}
        </Await>
      </Suspense>
    </>
  );
}
