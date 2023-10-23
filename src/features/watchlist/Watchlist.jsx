import classes from './Watchlist.module.css';
import SectionPagePrimary from '../../ui/SectionWrappers/SectionPagePrimary';
import MotionCardWatchlist from '../../ui/Cards/MotionCardWatchlist/MotionCardWatchlist';
import Spinner from '../../ui/Spinner/Spinner';
import Filter from '../../ui/Filter/Filter';
import SortBy from '../../ui/SortBy/SortBy';
import { useReadWatchlist } from './useReadWatchlist';

export default function Watchlist() {
  const { watchlist, isLoadingWatchlist } = useReadWatchlist();

  if (isLoadingWatchlist)
    return (
      <SectionPagePrimary>
        <Spinner />
      </SectionPagePrimary>
    );

  const cards = watchlist.map(motionDetail => (
    <MotionCardWatchlist key={motionDetail.id} motionDetail={motionDetail} />
  ));

  return (
    <SectionPagePrimary>
      <h2 className={classes.title}>My watchlist</h2>

      {!isLoadingWatchlist && (
        <div className={classes.filters}>
          <Filter
            filterField="category"
            options={[
              { value: 'all', label: 'All' },
              { value: 'movie', label: 'Movies' },
              { value: 'tv', label: 'TVs' },
            ]}
          />

          <SortBy
            options={[
              {
                value: 'created_at-descending',
                label: 'Date added (recent first)',
              },
              {
                value: 'created_at-ascending',
                label: 'Date added (older first)',
              },
              {
                value: 'release_date-descending',
                label: 'Release date (recent first)',
              },
              {
                value: 'release_date-ascending',
                label: 'Release date (older first)',
              },
              {
                value: 'vote_average-descending',
                label: 'Vote average (high first)',
              },
              {
                value: 'vote_average-ascending',
                label: 'Vote average (low first)',
              },
            ]}
          />
        </div>
      )}

      {!isLoadingWatchlist && <div className={classes.cards}>{cards}</div>}
    </SectionPagePrimary>
  );
}
