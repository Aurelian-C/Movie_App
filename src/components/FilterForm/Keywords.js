import classes from './Keywords.module.css';

export default function Keywords() {
  return (
    <>
      <div className={classes.keywords}>
        <i className={`fa-solid fa-xmark ${classes.keywords__clear}`}></i>
        <ul className={classes.keywords__list}>
          <li className={classes.keywords__item}>
            <span className={classes.keywords__text}>aaaaaaa</span>
            <i className={`fa-solid fa-xmark ${classes.keywords__delete}`}></i>
          </li>
          <li className={classes.keywords__item}>
            <span className={classes.keywords__text}>bbbbbbb</span>
            <i className={`fa-solid fa-xmark ${classes.keywords__delete}`}></i>
          </li>
          <li className={classes.keywords__item}>
            <span className={classes.keywords__text}>ccccccc</span>
            <i className={`fa-solid fa-xmark ${classes.keywords__delete}`}></i>
          </li>
          <li className={classes.keywords__item}>
            <span className={classes.keywords__text}>ddddddd</span>
            <i className={`fa-solid fa-xmark ${classes.keywords__delete}`}></i>
          </li>
          <li className={classes.keywords__item}>
            <span className={classes.keywords__text}>eeeeeee</span>
            <i className={`fa-solid fa-xmark ${classes.keywords__delete}`}></i>
          </li>
          <li className={classes.keywords__item}>
            <span className={classes.keywords__text}>fffffff</span>
            <i className={`fa-solid fa-xmark ${classes.keywords__delete}`}></i>
          </li>
          <input type="text" className={classes.keywords__input} />
        </ul>
      </div>
      <ul className={classes.options}>
        <li className={`${classes.option} ${classes.selected}`}>aaaaaaa</li>
        <li className={classes.option}>bbbbbbb</li>
        <li className={classes.option}>ccccccc</li>
        <li className={`${classes.option} ${classes.selected}`}>ddddddd</li>
        <li className={classes.option}>eeeeeee</li>
        <li className={`${classes.option} ${classes.selected}`}>fffffff</li>
      </ul>
    </>
  );
}
