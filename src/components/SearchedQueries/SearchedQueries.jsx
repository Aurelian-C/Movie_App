import classes from './SearchedQueries.module.css';
import SectionPagePrimary from '../UI/SectionWrapper/SectionPagePrimary';
import { Link } from 'react-router-dom';

export default function SearchedQueries({ items }) {
  return (
    <SectionPagePrimary className={classes.section}>
      {items.map(item => {
        let imageURL = item.poster_path || item.profile_path;
        let title = item.title || item.name;

        return (
          <Link
            to={`/${item.media_type}/${item.id}`}
            className={classes.card}
            key={item.id}
          >
            <div className={classes.card__image}>
              <img src={imageURL} alt={title} />
            </div>
            <div>
              <div className={classes.card__title}>{title}</div>
              <div>{item.media_type}</div>
            </div>
          </Link>
        );
      })}
    </SectionPagePrimary>
  );
}
