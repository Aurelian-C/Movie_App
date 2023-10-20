import MotionPictureHeader from '../MotionPictureHeader';
import MotionPictureProductionCompanies from '../MotionPictureProductionCompanies';
import PersonCard from '../../Cards/PersonCard/PersonCard';
import LoadingCards from '../../Cards/LoadingCard/LoadingCards';
import HeaderDetailsTv from './HeaderDetailsTv';
import MotionPictureVideos from '../MotionPictureVideos';
import { Suspense } from 'react';
import { Await } from 'react-router-dom';
import { createCastDetails } from '../../../helpers/helpers';
import LastSeasonDetailsTv from './LastSeasonsDetailsTv';

export default function MotionPictureTv({ motion, credits, videos }) {
  return (
    <>
      <MotionPictureHeader motion={{ ...motion }}>
        <HeaderDetailsTv motion={{ ...motion }} />
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
      <LastSeasonDetailsTv seasons={motion.seasons} />
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={videos}>
          {videoDetails => {
            if (videoDetails.videos.results.length) {
              return (
                <MotionPictureVideos
                  videos={videoDetails.videos}
                  videoTypes={videoDetails.videoTypes}
                />
              );
            } else {
              return null;
            }
          }}
        </Await>
      </Suspense>
    </>
  );
}
