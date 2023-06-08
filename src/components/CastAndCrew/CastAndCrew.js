import SectionPageSecondary from '../UI/SectionWrapper/SectionPageSecondary';
import classes from './CastAndCrew.module.css';

export default function CastAndCrew({ cast, crew }) {
  console.log('cast:', cast);
  console.log('crew:', crew);

  return (
    <SectionPageSecondary className={classes.test}>
      <h1>Cast & Crew Details</h1>
    </SectionPageSecondary>
  );
}
