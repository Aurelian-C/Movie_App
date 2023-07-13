export const API_KEY = '13a63a2e3653f6be0befa030e1a22ce6';
export const API_URL = 'https://api.themoviedb.org/3';
export const TIMEOUT_FETCH = 5; //5 seconds
export const PROMISE_DELAY = 1; //1 second

// Image path sizes
export const IMAGES_PATH_BIG =
  'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces';

export const PROFILE_PATH_SMALL = 'https://image.tmdb.org/t/p/w45';
export const PROFILE_PATH_MEDIUM = 'https://image.tmdb.org/t/p/w185';
export const PROFILE_PATH_BIG = 'https://image.tmdb.org/t/p/w500';

export const POSTER_PATH_SMALL = 'https://image.tmdb.org/t/p/w154';
export const POSTER_PATH_MEDIUM = 'https://image.tmdb.org/t/p/w500';
export const POSTER_PATH_BIG = 'https://image.tmdb.org/t/p/w780';

export const BACKDROP_PATH_SMALL = 'https://image.tmdb.org/t/p/w300';
export const BACKDROP_PATH_MEDIUM = 'https://image.tmdb.org/t/p/w780';
export const BACKDROP_PATH_BIG = 'https://image.tmdb.org/t/p/w1280';

export const LOGO_PATH_SMALL = 'https://image.tmdb.org/t/p/w45';
export const LOGO_PATH_MEDIUM = 'https://image.tmdb.org/t/p/w154';
export const LOGO_PATH_BIG = 'https://image.tmdb.org/t/p/w500';

/*
const imageSizes = {
  backdrop_sizes: ['w300', 'w780', 'w1280', 'original'],
  logo_sizes: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'],
  poster_sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
  profile_sizes: ['w45', 'w185', 'h632', 'original'],
  still_sizes: ['w92', 'w185', 'w300', 'original'],
};
*/

export const menuCategories = {
  movies: [
    { url: '/movie/popular', title: 'Popular' },
    { url: '/movie/top-rated', title: 'Top Rated' },
    { url: '/movie/upcoming', title: 'Upcoming' },
    { url: '/movie/now-playing', title: 'Now Playing' },
  ],
  tvShows: [
    { url: '/tv/popular', title: 'Popular' },
    { url: '/tv/top-rated', title: 'Top Rated' },
    { url: '/tv/on-the-air', title: 'On TV' },
    { url: '/tv/airing-today', title: 'Airing Today' },
  ],
  person: [{ url: '/person/popular', title: 'Popular People' }],
};
