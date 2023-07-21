import SectionGrid from '../../UI/SectionWrapper/SectionGrid';
import LoadingCard from './LoadingCard';

export default function LoadingCards({ type = 'movie' }) {
  return (
    <SectionGrid sectionTitle={'Top Cast'}>
      <LoadingCard type={type} />
    </SectionGrid>
  );
}
