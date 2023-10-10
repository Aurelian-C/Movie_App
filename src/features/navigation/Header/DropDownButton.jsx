import classes from './DropDownButton.module.css';

export default function DropDownButton({ onShowSideMenu }) {
  return (
    <div className={classes.header__dropdown}>
      <i
        className={`fa-bars fa-solid ${classes['header__dropdown-icon']}`}
        onClick={onShowSideMenu}
      ></i>
    </div>
  );
}
