import { API_KEY, API_URL, IMAGES_PATH } from './Config';
import { AJAX } from './Helpers';

export const state = {
  trendings: [],
};

const createCardDetails = result => {
  return {
    title: result.title || result.name || result.original_name,
    releaseDate: result.first_air_date || result.release_date,
    mediaType: result.media_type,
    posterImage: `${IMAGES_PATH}${result.poster_path}`,
    backdropImage: `${IMAGES_PATH}${result.backdrop_path}`,
    voteAverage: +Number.parseFloat(result.vote_average).toFixed(1),
    id: result.id,
  };
};

export const fetchCardDates = async function (category, mediaType, timeWindow) {
  try {
    const { results } = await AJAX(
      `${API_URL}/${category}/${mediaType}/${timeWindow}?api_key=${API_KEY}`
    );

    state.trendings = results.map(createCardDetails);
  } catch (err) {
    throw err;
  }
};
