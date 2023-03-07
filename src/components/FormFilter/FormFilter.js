import { Form } from 'react-router-dom';
import classes from './FormFilter.module.css';
import FilterContainer from './FilterContainer';
import SortContent from './SortContent';

export default function FormFilter() {
  return (
    <Form className={classes.form}>
      <FilterContainer filterTitle="Sort">
        <SortContent />
      </FilterContainer>
    </Form>
  );
}
