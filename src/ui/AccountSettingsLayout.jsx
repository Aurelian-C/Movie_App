import classes from './AccountSettingsLayout.module.css';
import { NavLink, Outlet } from 'react-router-dom';

function AccountSettingsLayout() {
  return (
    <div>
      <div className={classes.link__list}>
        <NavLink
          to="/account/settings/change-email"
          className={({ isActive }) =>
            isActive
              ? `${classes.link} ${classes['link--selected']}`
              : classes.link
          }
        >
          Change email
        </NavLink>
        <NavLink
          to="/account/settings/change-password"
          className={({ isActive }) =>
            isActive
              ? `${classes.link} ${classes['link--selected']}`
              : classes.link
          }
        >
          Change password
        </NavLink>
        <NavLink
          to="/account/settings/delete-account"
          className={({ isActive }) =>
            isActive
              ? `${classes.link} ${classes['link--selected']}`
              : classes.link
          }
        >
          Delete account
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default AccountSettingsLayout;
