import classes from './FormFilter.module.css';
import { Form } from 'react-router-dom';
import Sort from './Sort';

export default function FormFilter() {
  return (
    <Form className={classes.form}>
      <Sort />
      <div>Filters</div>
      <div>Where to Watch</div>
      <button>Search</button>
    </Form>
  );
}
