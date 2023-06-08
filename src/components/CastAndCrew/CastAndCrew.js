import classes from './CastAndCrew.module.css';

export default function CastAndCrew({ cast, crew }) {
  console.log('cast:', cast);
  console.log('crew:', crew);
  return <h1 className={classes.test}>Cast & Crew Details</h1>;
}
