import Search from '../components/Search/Search';
import CardItems from '../components/Cards/MovieCard/CardItems';
import Selector from '../components/Selector/Selector';
import { Suspense, useState } from 'react';
import useTrendings from '../hooks/useTrendings';
import useTopRated from '../hooks/useTopRated';
import Upcoming from '../components/Upcoming/Upcoming';
import { Await, defer, useRouteLoaderData } from 'react-router-dom';
import { API_URL, API_KEY } from '../config/config';
import { createUpcomingDetails } from '../config/helpers';

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

async function fetchUpcomings() {
  const getDateString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const dayOfMonth = today.getDate();
    return `${year}-${month}-${dayOfMonth}`;
  };

  const referenceYear = new Date().getFullYear() + 1;
  const today = getDateString();

  const addMediaAndYearProperty = (itemsArray, mediaType) => {
    return itemsArray.map(item => {
      const date = item.first_air_date || item.release_date;
      return {
        ...item,
        mediaType: mediaType,
        releaseYear: new Date(date).getFullYear(),
      };
    });
  };

  const responseMovie = await fetch(
    `${API_URL}/discover/movie?page=1&primary_release_date.gte=${today}&sort_by=popularity.desc&api_key=${API_KEY}`
  );
  const responseTV = await fetch(
    `${API_URL}/discover/tv?first_air_date.gte=${today}&include_adult=false&include_null_first_air_dates=false&page=1&sort_by=popularity.desc&api_key=${API_KEY}`
  );
  const { results: resultsMovie } = await responseMovie.json();
  const { results: resultsTV } = await responseTV.json();
  const formatMovies = addMediaAndYearProperty(resultsMovie, 'movie');
  const formatTVs = addMediaAndYearProperty(resultsTV, 'tv');
  const allResults = [...formatMovies, ...formatTVs];
  const filteredResults = allResults
    .filter(item => item.releaseYear < referenceYear)
    .sort((a, b) => {
      if (a.popularity > b.popularity) return -1;
      if (a.popularity < b.popularity) return 1;
      return 0;
    });
  return filteredResults.slice(0, 20);
}

export async function loaderUpcomings() {
  return defer({
    upcomings: fetchUpcomings(),
  });
}
