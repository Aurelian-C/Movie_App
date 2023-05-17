import Search from '../components/Search/Search';
import CardItems from '../components/Card/CardItems';
import Selector from '../components/Selector/Selector';
import { useState } from 'react';

const trendings = {
  categories: ['Movie', 'TV'],
  mainTitle: 'Trendings',
};

const people = {
  categories: ['Day', 'Week'],
  mainTitle: 'People',
};

export default function HomePage() {
  const [trendingsTitle, setTrendingsTitle] = useState('movie');
  const [peopleTitle, setPeopleTitle] = useState('person');

  function handleTrendingsTitle(word) {
    setTrendingsTitle(word);
  }

  function handlePeopleTitle(word) {
    setPeopleTitle(word);
  }

  return (
    <>
      <Search />
      <CardItems
        selectorCategories={trendings.categories}
        mainTitle={trendings.mainTitle}
        hasBackground={true}
        mediaType={trendingsTitle}
      >
        <Selector
          selectorCategories={trendings.categories}
          mainTitle={trendings.mainTitle}
          onGetCategoryTitle={handleTrendingsTitle}
        />
      </CardItems>
      <CardItems
        selectorCategories={people.categories}
        mainTitle={people.mainTitle}
        hasBackground={false}
        mediaType={peopleTitle}
      >
        <Selector
          selectorCategories={people.categories}
          mainTitle={people.mainTitle}
          onGetCategoryTitle={handlePeopleTitle}
        />
      </CardItems>
    </>
  );
}
