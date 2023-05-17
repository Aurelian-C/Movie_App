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
  const [tredingTitle, setTrendingTitle] = useState('day');

  function handlePopularityTitle(word) {
    setPopularityTitle(word);
  }
  function handleTrendingTitle(word) {
    setTrendingTitle(word);
  }

  return (
    <>
      <Search />
      <CardItems
        selectorCategories={popularity.categories}
        mainTitle={popularity.mainTitle}
        hasBackground={false}
        word={popularityTitle}
      >
        <Selector
          selectorCategories={popularity.categories}
          mainTitle={popularity.mainTitle}
          onGetCategoryTitle={handlePopularityTitle}
        />
      </CardItems>
      <CardItems
        selectorCategories={trending.categories}
        mainTitle={trending.mainTitle}
        hasBackground={true}
        word={tredingTitle}
      >
        <Selector
          selectorCategories={trending.categories}
          mainTitle={trending.mainTitle}
          onGetCategoryTitle={handleTrendingTitle}
        />
      </CardItems>
    </>
  );
}
