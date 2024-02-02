import classes from './TooltipPassword.module.css';
import {
  containsCapitalLetter,
  containsNonEmptySmallLetter,
  containsNumber,
  containsSpecialCharacter,
} from '../../helpers/helpers';

function TooltipPassword({ password, inputPasswordFocus }) {
  if (!password || !inputPasswordFocus) return null;

  const hasCapitalLetter = containsCapitalLetter(password);
  const hasSmallLetter = containsNonEmptySmallLetter(password);
  const hasNumber = containsNumber(password);
  const hasSpecialCharacters = containsSpecialCharacter(password);

  const iconCapitalLetter = hasCapitalLetter ? (
    <i className={`fa-solid fa-circle-check ${classes.icon__success}`}></i>
  ) : (
    <i className={`fa-solid fa-circle-xmark ${classes.icon__error}`}></i>
  );

  const iconSmallLetter = hasSmallLetter ? (
    <i className={`fa-solid fa-circle-check ${classes.icon__success}`}></i>
  ) : (
    <i className={`fa-solid fa-circle-xmark ${classes.icon__error}`}></i>
  );

  const iconNumber = hasNumber ? (
    <i className={`fa-solid fa-circle-check ${classes.icon__success}`}></i>
  ) : (
    <i className={`fa-solid fa-circle-xmark ${classes.icon__error}`}></i>
  );

  const iconSpecialCharacter = hasSpecialCharacters ? (
    <i className={`fa-solid fa-circle-check ${classes.icon__success}`}></i>
  ) : (
    <i className={`fa-solid fa-circle-xmark ${classes.icon__error}`}></i>
  );

  return (
    <div className={classes.tooltip}>
      <ul className={classes.tooltip__list}>
        <div className={classes.tooltip__description}>
          The password must contain <b>at least 8 characters</b> that include:
        </div>
        <li className={classes.tooltip__li}>
          {iconCapitalLetter}
          <div>one UPPERCASE letter (A-Z)</div>
        </li>
        <li className={classes.tooltip__li}>
          {iconSmallLetter}
          <div>one SMALL letter (a-z)</div>
        </li>
        <li className={classes.tooltip__li}>
          {iconNumber}
          <div>one number (0-9)</div>
        </li>
        <li className={classes.tooltip__li}>
          {iconSpecialCharacter}
          <div>a special character (!@#$)</div>
        </li>
      </ul>
    </div>
  );
}

export default TooltipPassword;
