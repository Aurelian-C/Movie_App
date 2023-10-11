import classes from './AccountMenuItems.module.css';
import { Link } from 'react-router-dom';

function AccountMenuItems({ type, label, link, onClick, disabled }) {
  if (type === 'link') {
    return (
      <li className={classes.account__li}>
        <Link to={link} className={classes.account__link}>
          {label}
        </Link>
      </li>
    );
  }

  if (type === 'button') {
    return (
      <li className={classes.account__li}>
        <button
          className={classes.account__button}
          disabled={disabled}
          onClick={onClick}
        >
          {label}
        </button>
      </li>
    );
  }

  return null;
}

export default AccountMenuItems;
