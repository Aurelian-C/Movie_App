import { Outlet } from 'react-router-dom';
import FilterForm from '../components/FilterForm/FilterForm';
import SectionPageSecondary from '../ui/SectionWrappers/SectionPageSecondary';

export default function FilterFormLayout() {
  return (
    <SectionPageSecondary className="presentation__layout">
      <FilterForm />
      <Outlet />
    </SectionPageSecondary>
  );
}
