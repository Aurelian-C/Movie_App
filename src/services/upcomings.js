import { API_KEY, API_URL } from '../config/config';
import { defer } from 'react-router-dom';

const addMediaAndYearProperty = (itemsArray, mediaType) => {
  return itemsArray.map(item => {
    const date = item.first_air_date || item.release_date;
    return {
      ...item,
      mediaType: mediaType,
      releaseYear: new Date(date).getFullYear(),
      releaseDate: new Date(date),
    };
  });
};

async function fetchUpcomings() {
  const getDateString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const dayOfMonth = today.getDate();
    const dayString = String(dayOfMonth).padStart(2, '0');
    return `${year}-${month}-${dayString}`;
  };

  const dateAfterSixMonths = new Date(Date.now() + 15778800000);
  const today = getDateString();

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
    .filter(item => item.releaseDate < dateAfterSixMonths)
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
