import classes from './MotionPictureHeader.module.css';
import { useContext } from 'react';
import { ModeDarkContext } from '../../store/dark-mode';

export default function MotionPictureHeader({ motion, children }) {
  const darkModeContext = useContext(ModeDarkContext);
  const light =
    'linear-gradient(to right, rgb(82, 105, 162), rgba(67, 22, 19, 0.6))';
  const dark =
    'linear-gradient(to right, rgba(41, 41, 41, 1), rgba(0, 0, 0,  0.6))';

  let liniarGradient = darkModeContext.darkMode ? dark : light;

  return (
    <div
      className={classes.header}
      style={{
        backgroundImage: `${liniarGradient}, url(${motion.backdrop_path})`,
      }}
    >
      <div className={classes['header__container']}>
        <div className={classes['header__poster']}>
          <img src={motion.poster_path} alt={motion.title} />
        </div>
        {children}
      </div>
    </div>
  );
}
