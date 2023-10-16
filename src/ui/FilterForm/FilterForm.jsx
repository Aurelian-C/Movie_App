import { Form } from 'react-router-dom';
import classes from './FilterForm.module.css';
import FilterContainer from './FilterContainer';
import SortContent from './SortContent';
import FilterContent from './FilterContent';

export default function FilterForm() {
  return (
    <Form className={classes.form}>
      <FilterContainer filterTitle="Sort">
        <SortContent />
      </FilterContainer>
      <FilterContainer filterTitle="Filters">
        <FilterContent />
      </FilterContainer>
    </Form>
  );
}
