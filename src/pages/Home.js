import Search from '../components/Search/Search';
import CardItems from '../components/Cards/MovieCard/CardItems';
import Selector from '../components/Selector/Selector';
import { Suspense, useState } from 'react';
import useTrendings from '../hooks/useTrendings';
import useTopRated from '../hooks/useTopRated';
import Upcoming from '../components/Upcoming/Upcoming';
import { Await, useRouteLoaderData } from 'react-router-dom';
import { createUpcomingDetails } from '../helpers/helpers';

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
  const { upcomings } = useRouteLoaderData('route-data');

  const trendingItems = useTrendings(trendingsTitle, 'week');
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
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={upcomings}>
          {upcomings => {
            const upcomingItems = createUpcomingDetails(upcomings);
            return <Upcoming upcomingItems={upcomingItems} />;
          }}
        </Await>
      </Suspense>
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
    </>
  );
}
