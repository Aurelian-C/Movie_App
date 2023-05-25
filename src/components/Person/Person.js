import classes from './Person.module.css';
import { Link } from 'react-router-dom';

export default function Person({ personDetail, movieCredits }) {
  let gender = personDetail.gender === 2 ? 'Male' : 'Female';
  let biography = personDetail.biography ? personDetail.biography : 'None';
  let birthday = personDetail.birthday ? personDetail.birthday : '-';
  let placeOfBirth = personDetail.placeOfBirth
    ? personDetail.placeOfBirth
    : '-';

  let ageYears = '-';
  if (personDetail.birthday) {
    const currentDate = new Date();
    const birthdayDate = new Date(personDetail.birthday);
    ageYears = Math.floor((currentDate - birthdayDate) / 31556952000);
  }

  let deathdayYear = null;
  let livedYears = null;
  if (personDetail.deathday) {
    const birthdayDate = new Date(personDetail.birthday);
    const deathdayDate = new Date(personDetail.deathday);

    deathdayYear = personDetail.deathday
      ? new Date(personDetail.deathday).getFullYear()
      : null;

    livedYears = Math.floor((deathdayDate - birthdayDate) / 31556952000);
  }

  const knownFor = movieCredits
    .filter(movie => movie.voteCount > 4000)
    .slice(0, 8);

  return (
    <div className={classes.person}>
      <div className={classes['person__container']}>
        <div className={classes['person__header']}>
          <div className={classes['person__image']}>
            <img src={personDetail.profileImage} alt={personDetail.name} />
          </div>
          <div className={classes['person__details']}>
            <h2 className={classes['person__name']}>{personDetail.name}</h2>
            <div className={classes['person__biography']}>
              <h3 className={classes['person__section-title']}>Biography</h3>
              <p>{biography}</p>
            </div>
            <div className={classes['person__information']}>
              <h3 className={classes['person__section-title']}>
                Personal info
              </h3>
              <div className={classes['person__info']}>
                <div>
                  <h4>Known For</h4>
                  <p>{personDetail.knownForDepartment}</p>
                </div>
                <div>
                  <h4>Gender</h4>
                  <p>{gender}</p>
                </div>
                <div>
                  <h4>Birthday</h4>
                  <p>{birthday}</p>
                </div>
                <div>
                  <h4>Age</h4>
                  <p>
                    {deathdayYear && `Dead in ${deathdayYear} at `}
                    {deathdayYear ? livedYears : ageYears}{' '}
                    {ageYears === '-' ? '' : 'years old'}
                  </p>
                </div>
                <div>
                  <h4>Place of birth</h4>
                  <p>{placeOfBirth}</p>
                </div>
              </div>
            </div>
            {knownFor.length > 0 && (
              <div className={classes['person__known']}>
                <h3 className={classes['person__section-title']}>Known for</h3>
                <div className={classes['movie__cards']}>
                  {knownFor.map(movie => {
                    return (
                      <div className={classes['movie__card']} key={movie.id}>
                        <div className={classes['movie__card-image']}>
                          <Link to={`/movie/${movie.id}`}>
                            <img src={movie.posterImage} alt={movie.title} />
                          </Link>
                        </div>
                        <Link
                          to={`/movie/${movie.id}`}
                          className={classes['movie__card-title']}
                        >
                          {movie.title}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
