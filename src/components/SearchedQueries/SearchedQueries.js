import classes from './SearchedQueries.module.css';
import SectionPrimary from '../UI/SectionWrapper/SectionPrimary';
import { Link } from 'react-router-dom';

export default function SearchedQueries({ items }) {
  console.log(items);

  return (
    <SectionPrimary className={classes.section}>
      {items.map(item => {
        let imageURL = item.posterImage || item.profileImage;
        let title = item.title || item.name;

        return (
          <Link
            to={`/${item.mediaType}/${item.id}`}
            className={classes.card}
            key={item.id}
          >
            <div className={classes.card__image}>
              <img src={imageURL} alt={title} />
            </div>
            <div>
              <div className={classes.card__title}>{title}</div>
              <div>{item.mediaType}</div>
            </div>
          </Link>
        );
      })}
    </SectionPrimary>
  );
}
