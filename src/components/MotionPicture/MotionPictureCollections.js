import classes from './MotionPictureCollections.module.css';
import SectionPageSecondary from '../UI/SectionWrapper/SectionPageSecondary';
import { useContext } from 'react';
import { ModeDarkContext } from '../../store/dark-mode';
import { Link } from 'react-router-dom';

export default function MotionPictureCollections({ collection }) {
  const darkModeContext = useContext(ModeDarkContext);
  if (!collection) return null;
  console.log(collection);

  const light =
    'linear-gradient(to right, rgb(82, 105, 162), rgba(67, 22, 19, 0.6))';
  const dark =
    'linear-gradient(to right, rgba(41, 41, 41, 1), rgba(0, 0, 0,  0.6))';

  let liniarGradient = darkModeContext.darkMode ? dark : light;

  return (
    <SectionPageSecondary>
      <div
        className={classes.collection}
        style={{
          backgroundImage: `${liniarGradient}, url(${collection.backdrop_path})`,
        }}
      >
        <h2 className={classes.collection__title}>Part of {collection.name}</h2>
        <ul className={classes.collection__list}>
          Includes:{' '}
          {collection.parts.map(part => (
            <li key={part.id}>
              <Link
                to={`/${part.media_type}/${part.id}`}
                className={classes.collection__link}
              >
                - {part.title}
              </Link>
            </li>
          ))}
        </ul>
        <button className={classes.collection__button}>
          View the collection
        </button>
      </div>
    </SectionPageSecondary>
  );
}
