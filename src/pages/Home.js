import Search from '../components/Search/Search';
import CardItems from '../components/Cards/MovieCard/CardItems';
import Selector from '../components/Selector/Selector';
import { useState } from 'react';
import useTrendings from '../hooks/useTrendings';
import useTopRated from '../hooks/useTopRated';

const trendings = {
  categories: ['Movie', 'TV'],
  mainTitle: 'Trendings',
};

const topRated = {
  categories: ['Movie', 'TV'],
  mainTitle: 'Top Rated',
};

export default function HomePage() {
  const [trendingsTitle, setTrendingsTitle] = useState('movie');
  const [topRatedTitle, setTopRatedTitle] = useState('movie');

  const trendingItems = useTrendings(trendingsTitle);
  const topRatedItems = useTopRated(topRatedTitle);

  function handleTrendingsSelector(word) {
    setTrendingsTitle(word);
  }

  function handleTopRatedSelector(word) {
    setTopRatedTitle(word);
  }

  return (
    <>
      <Search />
      <CardItems hasBackground={true} items={trendingItems}>
        <Selector
          selectorCategories={trendings.categories}
          mainTitle={trendings.mainTitle}
          onGetCategoryTitle={handleTrendingsSelector}
        />
      </CardItems>
      <CardItems hasBackground={false} items={topRatedItems}>
        <Selector
          selectorCategories={topRated.categories}
          mainTitle={topRated.mainTitle}
          onGetCategoryTitle={handleTopRatedSelector}
        />
      </CardItems>
    </>
  );
}
