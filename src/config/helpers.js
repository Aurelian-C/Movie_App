import { TIMEOUT_FETCH, IMAGES_PATH, IMAGES_PATH_BIG } from './config';

// const promiseDelay = function (seconds) {
//   return new Promise((resolve, _) => {
//     setTimeout(() => {
//       resolve();
//     }, seconds * 1000);
//   });
// };

const timeout = function (seconds) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(
        new Error(`Faild to fetch! Request took to long (${seconds} seconds)!`)
      );
    }, seconds * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);
    const request = await Promise.race([fetchPro, timeout(TIMEOUT_FETCH)]);
    const data = await request.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export const createCardDetails = result => {
  const date = result.first_air_date || result.release_date;
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const releaseDate = new Date(date).toLocaleString('en-US', options);

  let posterImage = result.poster_path
    ? `${IMAGES_PATH}${result.poster_path}`
    : `${IMAGES_PATH}${result.profile_path}`;

  return {
    title: result.title || result.name || result.original_name,
    mediaType: result.media_type,
    posterImage: posterImage,
    backdropImage: `${IMAGES_PATH}${result.backdrop_path}`,
    voteAverage: +Number.parseFloat(result.vote_average).toFixed(1),
    id: result.id,
    releaseDate,
  };
};

export const createMovieDetails = result => {
  const date = result.first_air_date || result.release_date;
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const releaseDate = new Date(date).toLocaleString('en-US', options);

  let posterImage = result.poster_path
    ? `${IMAGES_PATH}${result.poster_path}`
    : `${IMAGES_PATH}${result.profile_path}`;

  const runtime = {
    hours: Math.floor(result.runtime / 60),
    minutes: result.runtime % 60,
  };

  return {
    title: result.title || result.name || result.original_name,
    posterImage: posterImage,
    backdropImage: `${IMAGES_PATH_BIG}${result.backdrop_path}`,
    voteAverage: +Number.parseFloat(result.vote_average).toFixed(1),
    id: result.id,
    releaseDate,
    genres: result.genres,
    tagline: result.tagline,
    runtime,
    overview: result.overview,
  };
};

export const createCastDetails = cast => {
  return cast.map(person => {
    return {
      actorName: person.original_name,
      characterName: person.character,
      actorID: person.id,
      profileImage: `${IMAGES_PATH}${person.profile_path}`,
    };
  });
};
