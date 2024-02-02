import Search from '../../src/ui/Search/Search';
import Trendings from '../features/trendings/Trendings';
import TopRated from '../features/topRated/TopRated';
import Upcomings from '../features/upcomings/Upcomings';
import Footer from '../ui/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Search />
      <Trendings />
      <Upcomings />
      <TopRated />
      <Footer />
    </>
  );
}
