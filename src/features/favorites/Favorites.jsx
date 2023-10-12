import classes from './Favorites.module.css';
import SectionPagePrimary from '../../ui/SectionWrappers/SectionPagePrimary';
import MotionCardFavorites from '../../ui/Cards/MotionCardFavorites/MotionCardFavorites';
import Spinner from '../../ui/Spinner/Spinner';
import { useReadFavorites } from './useReadFavorites';

export default function Favorites() {
  const { favorites, isLoadingFavorites } = useReadFavorites();

  if (isLoadingFavorites) return <Spinner />;

  const cards = favorites.map(motionDetail => (
    <MotionCardFavorites key={motionDetail.id} motionDetail={motionDetail} />
  ));

  return (
    <SectionPagePrimary>
      {isLoadingFavorites && <Spinner />}
      {!isLoadingFavorites && <div className={classes.cards}>{cards}</div>}
    </SectionPagePrimary>
  );
}
