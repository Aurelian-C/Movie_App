import SectionCardsPerson from '../../UI/SectionWrapper/SectionCardsPerson';
import classes from './PersonCard.module.css';
import { Link } from 'react-router-dom';

export default function PersonCard({ castDetail }) {
  const cast = castDetail.slice(0, 9);

  return (
    <SectionCardsPerson sectionTitle={'Top Cast'}>
      {cast.map(person => {
        return (
          <div key={person.id} className={classes['person__card']}>
            <div className={classes['person__image']}>
              <Link to={`/person/${person.id}`}>
                <img src={person.profile_path} alt={person.original_name} />
              </Link>
            </div>
            <div className={classes['person__name']}>
              <Link to={`/person/${person.id}`}>{person.original_name}</Link>
              <h3>{person.character}</h3>
            </div>
          </div>
        );
      })}
      <Link className={classes['person__more']}>
        <span>View More</span>
        <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </SectionCardsPerson>
  );
}
