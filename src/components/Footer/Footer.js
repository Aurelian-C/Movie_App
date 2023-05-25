import classes from './Footer.module.css';
import logo from '../../assets/img/logo1.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={`${classes.footer} u-margin-top-big`}>
      <div className={classes.footer__container}>
        <div className={classes.footer__logo}>
          <img src={logo} alt="" className={classes.footer__img} />
        </div>
        <div className={classes.footer__content}>
          <h3 className={classes.footer__title}>THE BASICS</h3>
          <ul className={classes.footer__items}>
            <li className={classes.footer__item}>
              <a
                href="https://developer.themoviedb.org/reference/"
                target="_blank"
                className={classes.footer__link}
              >
                API
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.footer__copyright}>
        <p>
          This website is inspired by
          <Link
            className={classes['footer__copyright-link']}
            target="_blank"
            to="https://www.themoviedb.org/"
          >
            TMDB
          </Link>
          , build from scratch with HTML, CSS, Vanilla JavaScript, ReactJS &amp;
          React Router.
        </p>
        <p>
          For more projects go to
          <Link
            className={`${classes['footer__copyright-link']} ${classes['github-link']}`}
            target="_blank"
            to="https://aic-projects.netlify.app/"
          >
            Aurelian Cioloca
          </Link>
          web page.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
