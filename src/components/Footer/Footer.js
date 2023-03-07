import classes from './Footer.module.css';
import logo from '../../assets/img/tmdb_logo2.svg';
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
              <Link to="/" className={classes.footer__link}>
                About TMDB
              </Link>
            </li>
            <li className={classes.footer__item}>
              <Link to="/" className={classes.footer__link}>
                Contact Us
              </Link>
            </li>
            <li className={classes.footer__item}>
              <Link to="/" className={classes.footer__link}>
                Support Forums
              </Link>
            </li>
            <li className={classes.footer__item}>
              <Link to="/" className={classes.footer__link}>
                API
              </Link>
            </li>
            <li className={classes.footer__item}>
              <Link to="/" className={classes.footer__link}>
                System Status
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.footer__content}>
          <h3 className={classes.footer__title}>GET INVOLVED</h3>
          <ul className={classes.footer__items}>
            <li className={classes.footer__item}>
              <Link to="/" className={classes.footer__link}>
                Contribution Bible
              </Link>
            </li>
            <li className={classes.footer__item}>
              <Link to="/" className={classes.footer__link}>
                Add New Movie
              </Link>
            </li>
            <li className={classes.footer__item}>
              <Link to="/" className={classes.footer__link}>
                Add New TV Show
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.footer__content}>
          <h3 className={classes.footer__title}>COMMUNITY</h3>
          <ul className={classes.footer__items}>
            <li className={classes.footer__item}>
              <Link to="/" className={classes.footer__link}>
                Guidelines
              </Link>
            </li>
            <li className={classes.footer__item}>
              <Link to="/" className={classes.footer__link}>
                Discussions
              </Link>
            </li>
            <li className={classes.footer__item}>
              <Link to="/" className={classes.footer__link}>
                Leaderboard
              </Link>
            </li>
            <li className={classes.footer__item}>
              <Link to="/" className={classes.footer__link}>
                Twitter
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.footer__content}>
          <h3 className={classes.footer__title}>LEGAL</h3>
          <ul className={classes.footer__items}>
            <li className={classes.footer__item}>
              <Link to="/" className={classes.footer__link}>
                Terms of Use
              </Link>
            </li>
            <li className={classes.footer__item}>
              <Link to="/" className={classes.footer__link}>
                API Terms of Use
              </Link>
            </li>
            <li className={classes.footer__item}>
              <Link to="/" className={classes.footer__link}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.footer__copyright}>
        <p>
          This website is a clone of
          <Link
            className={classes['footer__copyright-link']}
            target="_blank"
            to="https://www.themoviedb.org/"
          >
            TMDB
          </Link>
          , build from scratch with HTML, CSS, Vanilla JavaScript, ReactJS &amp;
          React Router
        </p>
        <p>
          For more projects go to
          <Link
            className={`${classes['footer__copyright-link']} ${classes['github-link']}`}
            target="_blank"
            to="https://github.com/Aurelian-C"
          >
            Aurelian Cioloca
          </Link>
          Github page.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
