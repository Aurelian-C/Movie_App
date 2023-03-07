import { useState } from 'react';
import FilterBox from './FilterBox';
import FilterHeader from './FilterHeader';
import classes from './FilterContainer.module.css';

export default function FilterContainer({ filterTitle, children }) {
  const [contentVisibility, setContentVisibility] = useState(false);

  const handleSortContentVisibility = () => {
    if (!contentVisibility) {
      setContentVisibility(true);
    } else {
      setContentVisibility(false);
    }
  };

  let contentClasses = contentVisibility
    ? classes.form__content
    : `${classes.form__content} hidden`;

  return (
    <FilterBox>
      <FilterHeader
        title={filterTitle}
        onToggleContentVisibility={handleSortContentVisibility}
        contentVisibility={contentVisibility}
      />
      <div className={contentClasses}>{children}</div>
    </FilterBox>
  );
}
