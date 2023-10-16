import classes from './Favorites.module.css';
import SectionPagePrimary from '../../ui/SectionWrappers/SectionPagePrimary';
import MotionCardFavorites from '../../ui/Cards/MotionCardFavorites/MotionCardFavorites';
import Spinner from '../../ui/Spinner/Spinner';
import Filter from '../../ui/Filter/Filter';
import SortBy from '../../ui/SortBy/SortBy';
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

      {!isLoadingFavorites && (
        <Filter
          filterField="category"
          options={[
            { value: 'all', label: 'All' },
            { value: 'movies', label: 'Movies' },
            { value: 'tv', label: 'TVs' },
          ]}
        />
      )}

      {!isLoadingFavorites && (
        <SortBy
          options={[
            { value: 'startDate-desc', label: 'Sort by date (recent first)' },
            { value: 'startDate-asc', label: 'Sort by date (older first)' },
            {
              value: 'userScore-desc',
              label: 'Sort by user score (high first)',
            },
            { value: 'userScore-asc', label: 'Sort by user score (low first)' },
          ]}
        />
      )}

      {!isLoadingFavorites && <div className={classes.cards}>{cards}</div>}
    </SectionPagePrimary>
  );
}
