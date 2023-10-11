import classes from './AccountMenuProfile.module.css';
import { Link } from 'react-router-dom';

function AccountMenuProfile({ userEmail, firstName, lastName }) {
  return (
    <div className={classes.profile}>
      <Link to="/account" className={classes.profile__anchor}>
        <div className={classes.profile__data}>
          <img src="/default-user.jpg" className={classes.profile__image} />
          <div className={classes.profile__info}>
            <p className={classes.profile__name}>
              {firstName} {lastName}
            </p>
            <p className={classes.profile__email}>{userEmail}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AccountMenuProfile;
