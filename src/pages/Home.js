import Search from '../components/Search/Search';
import CardItems from '../components/Card/CardItems';
import Selector from '../components/Selector/Selector';
import { useState } from 'react';

const trending = {
  categories: ['Day', 'Week'],
  mainTitle: 'Trendings',
};

const popularity = {
  categories: ['Movie', 'TV'],
  mainTitle: "What's popular",
};

export default function HomePage() {
  const [popularityTitle, setPopularityTitle] = useState('movie');
  function handlePopularityTitle(word) {
    setPopularityTitle(word);
  }

  return (
    <>
      <Search />
      <CardItems
        selectorCategories={popularity.categories}
        mainTitle={popularity.mainTitle}
        hasBackground={true}
        word={popularityTitle}
      >
        <Selector
          selectorCategories={popularity.categories}
          mainTitle={popularity.mainTitle}
          onGetCategoryTitle={handlePopularityTitle}
        />
      </CardItems>
    </>
  );
}
