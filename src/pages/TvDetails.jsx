import { createTvDetails } from '../helpers/helpers';
import { useRouteLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
import MotionPictureTv from '../components/MotionPicture/Tv/MotionPictureTv';

export default function TvDetails() {
  const { tv, credits, videos } = useRouteLoaderData('tv-detail');
  const tvDetail = createTvDetails(tv);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MotionPictureTv motion={tvDetail} credits={credits} videos={videos} />
  );
}
