import { Outlet } from 'react-router-dom';
import FilterForm from '../ui/FilterForm/FilterForm';
import SectionPageSecondary from '../ui/SectionWrappers/SectionPageSecondary';

export default function FilterFormLayout() {
  return (
    <SectionPageSecondary className="presentation__layout">
      <FilterForm />
      <Outlet />
    </SectionPageSecondary>
  );
}
