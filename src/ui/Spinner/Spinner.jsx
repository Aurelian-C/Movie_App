import classes from './Spinner.module.css';

function Spinner() {
  return (
    <div className={classes.container}>
      <div className={classes.spinner}></div>
    </div>
  );
}

export default Spinner;
