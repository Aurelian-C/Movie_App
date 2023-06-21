import { Outlet } from 'react-router-dom';
import FilterForm from '../components/FilterForm/FilterForm';
import SectionPageSecondary from '../components/UI/SectionWrapper/SectionPageSecondary';

export default function FilterFormLayout() {
  return (
    <SectionPageSecondary className="presentation__layout">
      <FilterForm />
      <Outlet />
    </SectionPageSecondary>
  );
}
