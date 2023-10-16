import { useState } from 'react';
import { useTrendings } from './useTrendings';
import CardItems from '../../ui/Cards/MovieCard/CardItems';
import Selector from '../../ui/Selector/Selector';

const trendings = {
  categories: ['Movie', 'TV'],
  mainTitle: 'Trendings',
};

function Trendings() {
  const [trendingsTitle, setTrendingsTitle] = useState('movie');
  const trendingItems = useTrendings(trendingsTitle, 'week');

  function handleTrendingsSelector(word) {
    setTrendingsTitle(word);
  }

  return (
    <CardItems hasBackground={true} items={trendingItems}>
      <Selector
        selectorCategories={trendings.categories}
        mainTitle={trendings.mainTitle}
        onGetCategoryTitle={handleTrendingsSelector}
      />
    </CardItems>
  );
}

export default Trendings;
