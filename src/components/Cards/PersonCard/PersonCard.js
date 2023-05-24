import classes from './PersonCard.module.css';

export default function PersonCard({ castDetail }) {
  const cast = castDetail.slice(0, 9);
  console.log(cast);
  return (
    <div className={classes.person}>
      <h2 className={classes['person__section-name']}>Top Billed Cast</h2>
      <div className={classes['person__container']}>
        {cast.map(person => {
          return (
            <div key={person.actorID} className={classes['person__card']}>
              <div className={classes['person__image']}>
                <img src={person.profileImage} />
              </div>
              <div className={classes['person__name']}>
                <h2>{person.actorName}</h2>
                <h3>{person.characterName}</h3>
              </div>
            </div>
          );
        })}
        <button className={classes['person__button']}>
          <span>View More</span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
