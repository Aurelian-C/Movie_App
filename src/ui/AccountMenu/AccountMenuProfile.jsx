import classes from './AccountMenuProfile.module.css';

function AccountMenuProfile({
  userEmail,
  firstName,
  lastName,
  profileImage,
  isAdminUser,
}) {
  const avatar = profileImage || '/default-user.jpg';

  return (
    <div className={classes.profile}>
      <div className={classes.profile__data}>
        <img src={avatar} className={classes.profile__image} />
        <div className={classes.profile__info}>
          <p className={classes.profile__name}>
            {firstName} {lastName}
          </p>
          <p className={classes.profile__email}>{userEmail}</p>
          <p className={classes.profile__admin}>
            {isAdminUser && 'Administrator website'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccountMenuProfile;
