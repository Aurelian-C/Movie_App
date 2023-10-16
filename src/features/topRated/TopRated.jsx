import { useState } from 'react';
import useTopRated from './useTopRated';
import CardItems from '../../ui/Cards/MovieCard/CardItems';
import Selector from '../../ui/Selector/Selector';

const topRated = {
  categories: ['Movie', 'TV'],
  mainTitle: 'Top Rated',
};

function TopRated() {
  const [topRatedTitle, setTopRatedTitle] = useState('movie');
  const topRatedItems = useTopRated(topRatedTitle);

  function handleTopRatedSelector(word) {
    setTopRatedTitle(word);
  }

  return (
    <CardItems
      hasBackground={false}
      items={topRatedItems}
      mediaType={topRatedTitle}
    >
      <Selector
        selectorCategories={topRated.categories}
        mainTitle={topRated.mainTitle}
        onGetCategoryTitle={handleTopRatedSelector}
      />
    </CardItems>
  );
}

export default TopRated;
