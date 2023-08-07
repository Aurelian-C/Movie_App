import SectionGrid from '../../../ui/SectionWrappers/SectionGrid';
import LoadingCard from './LoadingCard';

export default function LoadingCards({ type = 'movie' }) {
  return (
    <SectionGrid sectionTitle={'Top Cast'}>
      <LoadingCard type={type} />
    </SectionGrid>
  );
}
