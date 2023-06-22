import { Link } from 'react-router-dom';
import classes from './PersonListCard.module.css';

export default function PersonListCard({ person, mediaType }) {
  console.log(person);

  return (
    <div className={classes.person__card}>
      <Link to={`/${mediaType}/${person.id}`}>
        <div
          style={{ backgroundImage: `url(${person.profile_path})` }}
          className={classes.person__image}
        ></div>
      </Link>
      <ul className={classes.person__list}>
        <h3 className={classes.person__knownfor}>Known for:</h3>
        {person.known_for.map(item => (
          <li key={item.id}>
            <Link
              to={`/${item.media_type}/${item.id}`}
              className={classes.person__motion}
            >
              <span className={classes.person__titles}>
                - {item.title || item.name}
              </span>{' '}
              <span className={classes.person__releaseyear}>
                ({item.releaseYear})
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link to={`/${mediaType}/${person.id}`} className={classes.person__name}>
        {person.name}
      </Link>
    </div>
  );
}
