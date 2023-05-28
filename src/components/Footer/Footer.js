import classes from './Footer.module.css';
import logo from '../../assets/img/logo1.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={`${classes.footer}`}>
      <div className={classes.footer__logo}>
        <img src={logo} alt="" className={classes.footer__img} />
      </div>
      <div className={classes.footer__copyright}>
        <p>
          This website is build from scratch with HTML, CSS, Vanilla JavaScript,
          ReactJS &amp; React Router.
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
}
