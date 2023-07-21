import classes from './FilterHeader.module.css';

export default function FilterHeader({
  onToggleContentVisibility,
  contentVisibility,
  title,
}) {
  let icon__rotate = contentVisibility ? classes.rotate : '';

  return (
    <div className={classes.form__header} onClick={onToggleContentVisibility}>
      <h3 className={classes['form__header-title']}>{title}</h3>
      <i className={`fa-solid fa-chevron-right ${icon__rotate}`}></i>
    </div>
  );
}
