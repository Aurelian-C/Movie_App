import { API_KEY, API_URL, IMAGES_PATH, AJAX } from './helpers';

export const state = {
  trendings: {
    selector: {
      title: 'Trendings',
      items: ['Day', 'Week'],
    },
    cards: [],
    searchHints: [],
  },

  popular: {
    selector: {
      title: `What's popular`,
      items: ['Movie', 'TV'],
    },
    cards: [],
  },
};

const createSearchHints = result => {
  return `${result.title || result.name || result.original_name}`;
};

export const fetchSearchHints = async function (
  category,
  mediaType,
  timeWindow
) {
  try {
    const { results } = await AJAX(
      `${API_URL}/${category}/${mediaType}/${timeWindow}?api_key=${API_KEY}`
    );
    const state = results.map(createSearchHints).slice(0, 10);
    return state;
  } catch (err) {
    throw err;
  }
};

const createCardDetails = result => {
  const date = result.first_air_date || result.release_date;
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const releaseDate = new Date(date).toLocaleString('en-US', options);

  return {
    title: result.title || result.name || result.original_name,
    mediaType: result.media_type,
    posterImage: `${IMAGES_PATH}${result.poster_path}`,
    backdropImage: `${IMAGES_PATH}${result.backdrop_path}`,
    voteAverage: +Number.parseFloat(result.vote_average).toFixed(1),
    id: result.id,
    releaseDate,
  };
};

export const fetchPopular = async function (mediaType) {
  try {
    const { results } = await AJAX(
      `${API_URL}${mediaType}/popular?api_key=${API_KEY}`
    );
    return results.map(createCardDetails);
  } catch (err) {
    throw err;
  }
};

export const fetchTrendings = async function (timeWindow, mediaType, category) {
  try {
    const { results } = await AJAX(
      `${API_URL}/${category}/${mediaType}/${timeWindow}?api_key=${API_KEY}`
    );
    return results.map(createCardDetails);
  } catch (err) {
    throw err;
  }
};

export const fetchGenres = async function (mediaType) {
  try {
    const results = await AJAX(
      `${API_URL}genre/${mediaType}/list?api_key=${API_KEY}`
    );
    console.log(results);
  } catch (err) {
    throw err;
  }
};
