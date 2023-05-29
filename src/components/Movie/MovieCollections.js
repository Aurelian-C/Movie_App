import SectionSecondary from '../UI/SectionWrapper/SectionSecondary';
import classes from './MovieCollections.module.css';

export default function MovieCollections({ collection }) {
  if (!collection) return null;

  return (
    <SectionSecondary>
      <div
        className={classes.collection}
        style={{ backgroundImage: `url(${collection.backdrop_path})` }}
      >
        <h2 className={classes.collection__title}>Part of {collection.name}</h2>
        <p className={classes.collection__names}>Includes: </p>
      </div>
    </SectionSecondary>
  );
}
