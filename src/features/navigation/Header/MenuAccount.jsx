import classes from './MenuAccount.module.css';
import { ACCOUNT_MENU_ITEMS } from '../../../helpers/config';
import AccountMenuItems from '../../../ui/AccountMenu/AccountMenuItems';
import AccountMenuProfile from '../../../ui/AccountMenu/AccountMenuProfile';
import { useUser } from '../../authentication/useUser';
import { useLogout } from '../../authentication/useLogout';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MenuAccount() {
  const { isAuthenticated, firstName, lastName, userEmail } = useUser();
  const [isVisible, setIsVisible] = useState(false);
  const iconRef = useOutsideClick(() => setIsVisible(false));

  const { logout, isLoadingLogout } = useLogout();

  function handleAccountMenuVisibility() {
    setIsVisible(true);
  }

  const accountMenuItems = ACCOUNT_MENU_ITEMS.map((blockOfItems, idx) => {
    return (
      <ul className={classes.account__ul} key={idx}>
        {blockOfItems.map(item => (
          <AccountMenuItems
            key={item.label}
            type={item.type}
            label={item.label}
            link={item.link}
            onClick={logout}
            disabled={isLoadingLogout}
          />
        ))}
      </ul>
    );
  });

  return (
    <ul
      className={`${classes['header__menu-items']} ${classes['header__menu-items--2']}`}
    >
      <li className={classes['header__menu-item']}>
        {!isAuthenticated && (
          <Link to="/login" className={classes['header__menu-link']}>
            <i
              className={`fa-solid fa-user ${classes['header__mobile-icon']}`}
            ></i>
          </Link>
        )}
        {isAuthenticated && (
          <div className={classes.account}>
            <i
              className="fa-regular fa-circle-user"
              onClick={handleAccountMenuVisibility}
              ref={iconRef}
            ></i>
            <div
              className={`${classes.account__menu} ${
                isVisible ? '' : classes.hidden
              }`}
            >
              <div>
                <AccountMenuProfile
                  userEmail={userEmail}
                  firstName={firstName}
                  lastName={lastName}
                />
                {accountMenuItems}
              </div>
            </div>
          </div>
        )}
      </li>
    </ul>
  );
}
