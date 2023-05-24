import classes from './PersonCard.module.css';
import { Link } from 'react-router-dom';

export default function PersonCard({ castDetail }) {
  const cast = castDetail.slice(0, 9);

  return (
    <div className={classes.person}>
      <div className={classes['person__container']}>
        <h2 className={classes['person__section-name']}>Top Billed Cast</h2>
        <div className={classes['person__cards']}>
          {cast.map(person => {
            return (
              <div key={person.actorID} className={classes['person__card']}>
                <div className={classes['person__image']}>
                  <Link to={`/person/${person.actorID}`}>
                    <img src={person.profileImage} alt={person.actorName} />
                  </Link>
                </div>
                <div className={classes['person__name']}>
                  <Link to={`/person/${person.actorID}`}>
                    {person.actorName}
                  </Link>
                  <h3>{person.characterName}</h3>
                </div>
              </div>
            );
          })}
          <Link className={classes['person__more']}>
            <span>View More</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
