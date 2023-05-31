import MotionPictureHeader from '../MotionPictureHeader';
import PersonCard from '../../Cards/PersonCard/PersonCard';
import LoadingCard from '../../Cards/LoadingCard/LoadingCard';
import HeaderDetailsTv from './HeaderDetailsTv';
import { Suspense } from 'react';
import { Await } from 'react-router-dom';
import { createCastDetails } from '../../../config/helpers';

export default function MotionPictureTv({ motion, credits }) {
  return (
    <>
      <MotionPictureHeader motion={{ ...motion }}>
        <HeaderDetailsTv motion={{ ...motion }} />
      </MotionPictureHeader>
      <Suspense fallback={<LoadingCard type="person" />}>
        <Await resolve={credits}>
          {credits => {
            const castDetail = createCastDetails(credits.cast);
            return <PersonCard cast={castDetail} />;
          }}
        </Await>
      </Suspense>
    </>
  );
}
