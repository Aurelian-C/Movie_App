import { useState } from 'react';
import classes from './Person.module.css';
import { Link } from 'react-router-dom';

export default function Person({ personDetail, movieCredits }) {
  const [renderFullBiography, setRenderFullBiography] = useState(false);

  function handleFullBiography() {
    setRenderFullBiography(true);
  }

  let gender = personDetail.gender === 2 ? 'Male' : 'Female';
  let biography = personDetail.biography ? personDetail.biography : 'None';
  const biographyArray = biography.split('\n').filter(string => string !== '');
  biography = renderFullBiography ? biographyArray : biographyArray.slice(0, 2);
  let birthday = personDetail.birthday ? personDetail.birthday : '-';
  let placeOfBirth = personDetail.placeOfBirth
    ? personDetail.placeOfBirth
    : '-';
  let renderButton = !renderFullBiography && biographyArray.length > 2;

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

  const voteCounts = 2500;
  const knownFor = movieCredits
    .filter(movie => movie.voteCount > voteCounts)
    .sort((a, b) => {
      if (a.voteCount < b.voteCount) {
        return 1;
      }

      if (a.voteCount > b.voteCount) {
        return -1;
      }

      return 0;
    })
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
              <div className={classes['person__biography-text']}>
                {biography.map((string, i) => (
                  <p key={i}>{string}</p>
                ))}
                {renderButton && (
                  <button
                    className={classes['person__biography-button']}
                    onClick={handleFullBiography}
                  >
                    <span>Read more</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>
                )}
              </div>
            </div>
            <div className={classes['person__information']}>
              <h3 className={classes['person__section-title']}>
                Personal info
              </h3>
              <div className={classes['person__info']}>
                <div>
                  <h4 className={classes['person__info-title']}>Known For</h4>
                  <p className={classes['person__info-paragraph']}>
                    {personDetail.knownForDepartment}
                  </p>
                </div>
                <div>
                  <h4 className={classes['person__info-title']}>Gender</h4>
                  <p className={classes['person__info-paragraph']}>{gender}</p>
                </div>
                <div>
                  <h4 className={classes['person__info-title']}>Birthday</h4>
                  <p className={classes['person__info-paragraph']}>
                    {birthday}
                  </p>
                </div>
                <div>
                  <h4 className={classes['person__info-title']}>Age</h4>
                  <p className={classes['person__info-paragraph']}>
                    {deathdayYear && `Dead in ${deathdayYear} at `}
                    {deathdayYear ? livedYears : ageYears}{' '}
                    {ageYears === '-' ? '' : 'years old'}
                  </p>
                </div>
                <div>
                  <h4 className={classes['person__info-title']}>
                    Place of birth
                  </h4>
                  <p className={classes['person__info-paragraph']}>
                    {placeOfBirth}
                  </p>
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
