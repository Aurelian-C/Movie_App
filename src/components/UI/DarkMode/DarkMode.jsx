import classes from './DarkMode.module.css';
import { ModeDarkContext } from '../../../store/dark-mode';
import { useContext } from 'react';

export default function DarkMode() {
  const darkModeContext = useContext(ModeDarkContext);

  return (
    <div className={classes['header__access']}>
      {!darkModeContext.darkMode && (
        <i
          className="fa-solid fa-moon"
          onClick={darkModeContext.onDarkMode}
        ></i>
      )}
      {darkModeContext.darkMode && (
        <i
          className="fa-regular fa-sun"
          onClick={darkModeContext.onLightMode}
        ></i>
      )}
    </div>
  );
}
