import { useState } from 'react';
import FilterBox from './FilterBox';
import FilterHeader from './FilterHeader';

export default function FilterContainer({ filterTitle, children }) {
  const [contentVisibility, setContentVisibility] = useState(false);

  const handleSortContentVisibility = () => {
    if (!contentVisibility) {
      setContentVisibility(true);
    } else {
      setContentVisibility(false);
    }
  };

  let contentClass = contentVisibility ? '' : 'hidden';

  return (
    <FilterBox>
      <FilterHeader
        title={filterTitle}
        onToggleContentVisibility={handleSortContentVisibility}
        contentVisibility={contentVisibility}
      />
      <div className={contentClass}>{children}</div>
    </FilterBox>
  );
}
