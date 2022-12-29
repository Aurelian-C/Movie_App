import React from 'react';
import classes from './Footer.module.scss';
import logo from '../../../assets/img/tmdb_logo2.svg';

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
              <a href="#" className={classes.footer__link}>
                About TMDB
              </a>
            </li>
            <li className={classes.footer__item}>
              <a href="#" className={classes.footer__link}>
                Contact Us
              </a>
            </li>
            <li className={classes.footer__item}>
              <a href="#" className={classes.footer__link}>
                Support Forums
              </a>
            </li>
            <li className={classes.footer__item}>
              <a href="#" className={classes.footer__link}>
                API
              </a>
            </li>
            <li className={classes.footer__item}>
              <a href="#" className={classes.footer__link}>
                System Status
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.footer__content}>
          <h3 className={classes.footer__title}>GET INVOLVED</h3>
          <ul className={classes.footer__items}>
            <li className={classes.footer__item}>
              <a href="#" className={classes.footer__link}>
                Contribution Bible
              </a>
            </li>
            <li className={classes.footer__item}>
              <a href="#" className={classes.footer__link}>
                Add New Movie
              </a>
            </li>
            <li className={classes.footer__item}>
              <a href="#" className={classes.footer__link}>
                Add New TV Show
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.footer__content}>
          <h3 className={classes.footer__title}>COMMUNITY</h3>
          <ul className={classes.footer__items}>
            <li className={classes.footer__item}>
              <a href="#" className={classes.footer__link}>
                Guidelines
              </a>
            </li>
            <li className={classes.footer__item}>
              <a href="#" className={classes.footer__link}>
                Discussions
              </a>
            </li>
            <li className={classes.footer__item}>
              <a href="#" className={classes.footer__link}>
                Leaderboard
              </a>
            </li>
            <li className={classes.footer__item}>
              <a href="#" className={classes.footer__link}>
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.footer__content}>
          <h3 className={classes.footer__title}>LEGAL</h3>
          <ul className={classes.footer__items}>
            <li className={classes.footer__item}>
              <a href="#" className={classes.footer__link}>
                Terms of Use
              </a>
            </li>
            <li className={classes.footer__item}>
              <a href="#" className={classes.footer__link}>
                API Terms of Use
              </a>
            </li>
            <li className={classes.footer__item}>
              <a href="#" className={classes.footer__link}>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.footer__copyright}>
        <p>
          This website is a clone of
          <a
            className={classes['footer__copyright-link']}
            target="_blank"
            href="https://www.themoviedb.org/"
          >
            TMDB
          </a>
          , build from scratch with ReactJS &amp; Vanilla JavaScript.
        </p>
        <p>
          For more projects go to
          <a
            className={`${classes['footer__copyright-link']} ${classes['github-link']}`}
            target="_blank"
            href="https://github.com/Aurelian-C"
          >
            Aurelian Cioloca
          </a>
          Github page.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
