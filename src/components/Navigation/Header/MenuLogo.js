import logo1 from '../../../assets/img/logo1.png';
import classes from './MenuLogo.module.css';
import { Link } from 'react-router-dom';

export default function MenuLogo() {
  return (
    <div className={classes.header__logo}>
      <Link to="/" className={classes['header__logo--big-screen']}>
        <img src={logo1} alt="" className={classes.header__img} />
      </Link>
      <Link to="/" className={classes['header__logo--small-screen']}>
        <img src={logo1} alt="" className={classes.header__img} />
      </Link>
    </div>
  );
}
