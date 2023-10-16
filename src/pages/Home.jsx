import Search from '../../src/ui/Search/Search';
import Trendings from '../features/trendings/Trendings';
import TopRated from '../features/topRated/TopRated';
import Upcomings from '../features/upcomings/Upcomings';

export default function HomePage() {
  return (
    <>
      <Search />
      <Trendings />
      <Upcomings />
      <TopRated />
    </>
  );
}
