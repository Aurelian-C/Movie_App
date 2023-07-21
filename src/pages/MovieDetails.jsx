import {
  createCollectionDetails,
  createMovieDetails,
} from '../helpers/helpers';
import { useRouteLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
import MotionPictureMovie from '../components/MotionPicture/Movie/MotionPictureMovie';

export default function MovieDetails() {
  const {
    movie: [movie, collection],
    credits,
    videos,
  } = useRouteLoaderData('movie-detail');

  const movieDetail = createMovieDetails(movie);
  let collectionDetail;
  if (collection) {
    collectionDetail = createCollectionDetails(collection);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MotionPictureMovie
      motion={{ ...movieDetail }}
      credits={credits}
      collection={collectionDetail}
      videos={videos}
    />
  );
}
