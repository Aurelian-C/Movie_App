import { API_KEY, API_URL, IMAGES_PATH } from './Config';
import { AJAX } from './Helpers';

export const state = {
  trendings: {
    selector: {
      title: 'Trendings',
      items: ['All', 'Movie', 'TV'],
    },
    cards: [],
  },

  popular: {
    selector: {
      title: `What's popular`,
      items: ['Streaming', 'On TV', 'For Rent', 'In Theaters'],
    },
    cards: [],
  },
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

export const fetchCardDates = async function (category, mediaType, timeWindow) {
  try {
    const { results } = await AJAX(
      `${API_URL}/${category}/${mediaType}/${timeWindow}?api_key=${API_KEY}`
    );

    state.trendings.cards = results.map(createCardDetails);
  } catch (err) {
    throw err;
  }
};
