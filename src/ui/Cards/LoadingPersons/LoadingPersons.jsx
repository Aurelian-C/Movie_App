import classes from './LoadingPersons.module.css';
import noPersonImage from '../../../assets/img/person_with_no_image.png';

export default function LoadingPersons() {
  const cardsArrayNumber = Array.from(Array(15));

  return (
    <div className={classes.person__container}>
      {cardsArrayNumber.map((_, i) => (
        <div className={classes.person__card} key={i}>
          <div
            style={{ backgroundImage: `url(${noPersonImage})` }}
            className={classes.person__image}
          ></div>
          <ul className={classes.person__list}>
            <h3 className={classes.person__knownfor}>Known for:</h3>
            <li className={classes.person__titles}></li>
            <li className={classes.person__titles}></li>
            <li className={classes.person__titles}></li>
          </ul>
          <div className={classes.person__name}></div>
        </div>
      ))}
    </div>
  );
}
