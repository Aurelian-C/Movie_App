import classes from './SearchButton.module.css';

export default function SearchButton({ onHide, onShow, buttonVisibility }) {
  return (
    <div
      className={`${classes.header__menu} ${classes['header__menu-search']}`}
    >
      {buttonVisibility && (
        <i
          className={`fa-magnifying-glass fa-solid ${classes['icon-search']} ${classes['icon-search--open']}`}
          onClick={onHide}
        ></i>
      )}
      {buttonVisibility || (
        <i
          className={`fa-solid fa-xmark ${classes['icon-search']} ${classes['icon-search--close']}`}
          onClick={onShow}
        ></i>
      )}
    </div>
  );
}
