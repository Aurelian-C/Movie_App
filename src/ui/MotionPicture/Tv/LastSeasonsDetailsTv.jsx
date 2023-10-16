import SectionPageSecondary from '../../../ui/SectionWrappers/SectionPageSecondary';
import classes from './LastSeasonsDetailsTv.module.css';
import { Link } from 'react-router-dom';

export default function LastSeasonDetailsTv({ seasons }) {
  const lastSeason = seasons[seasons.length - 1];
  const year = new Date(lastSeason.air_date).getFullYear();

  return (
    <SectionPageSecondary>
      <h2>Last Season</h2>
      <div className={classes.season}>
        <Link to="">
          {' '}
          <img
            src={lastSeason.poster_path}
            alt={lastSeason.name}
            className={classes.seasons__image}
          />
        </Link>
        <div className={classes.season__details}>
          <div className={classes.season__title}>
            <Link to="">{lastSeason.name}</Link>
            <div>
              {year} | {lastSeason.episode_count} Episodes
            </div>
          </div>
          <p className={classes.season__overview}>{lastSeason.overview}</p>
        </div>
      </div>
      <button className={classes.season__button}>View All Seasons</button>
    </SectionPageSecondary>
  );
}
