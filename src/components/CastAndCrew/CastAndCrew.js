import { Link } from 'react-router-dom';
import SectionPageSecondary from '../UI/SectionWrapper/SectionPageSecondary';
import classes from './CastAndCrew.module.css';
import { useEffect, useState } from 'react';

export default function CastAndCrew({ cast, crew }) {
  const [department, setDepartment] = useState('Cast');
  // console.log('cast:', cast);
  // console.log('crew:', crew);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const crewMembers = [];
  crew.forEach(item => {
    const isInDepartment = crewMembers.some(
      dep => dep.department === item.department
    );

    if (isInDepartment) {
      const idx = crewMembers.findIndex(
        dep => dep.department === item.department
      );
      crewMembers[idx].crew.push(item);
    } else {
      crewMembers.push({ department: item.department, crew: [item] });
    }
  });
  crewMembers.sort((a, b) => {
    if (a.department > b.department) return 1;
    if (a.department < b.department) return -1;
    return 0;
  });
  crewMembers.unshift({ department: 'Cast', crew: cast });

  const filteredCrewMembers = crewMembers.filter(
    item => item.department === department
  )[0];

  function handleSelectedCrew(e) {
    const { crew } = e.target.dataset;
    setDepartment(crew);
  }

  return (
    <SectionPageSecondary className={classes.margin__top}>
      <h1>Cast & Crew Details</h1>
      <div className={classes.credits}>
        <ul className={classes.credits__departments}>
          {crewMembers.map(item => {
            let departmentClass =
              item.department === department
                ? `${classes.credits__department} ${classes.selected}`
                : classes.credits__department;

            return (
              <li
                className={departmentClass}
                key={item.department}
                data-crew={item.department}
                onClick={handleSelectedCrew}
              >
                {item.department}
              </li>
            );
          })}
        </ul>
        <ul className={classes.credits__crew}>
          {filteredCrewMembers.crew.map(person => {
            return (
              <li key={`${person.id}${person.job}`} className={classes.person}>
                <Link
                  to={`/person/${person.id}`}
                  className={classes.person__anchor}
                >
                  <img
                    src={person.profile_path}
                    className={classes.person__image}
                    alt={person.profile_path}
                  />
                  <div className={classes.person__info}>
                    <div className={classes.person__name}>{person.name}</div>
                    <div className={classes.person__character}>
                      {person.character || person.job}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </SectionPageSecondary>
  );
}
