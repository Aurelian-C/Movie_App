import { TIMEOUT_FETCH, IMAGES_PATH, IMAGES_PATH_BIG } from './config';
import personWithoutImage from '../assets/img/person_with_no_image.png';
import personWithoutImageBig from '../assets/img/person_with_no_image_big.png';
import cardWithoutImage from '../assets/img/placeholder_content_img1.jpg';

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

export function createMovieCredits(movies) {
  return movies.map(movie => {
    return {
      title: movie.title,
      voteCount: movie.vote_count,
      id: movie.id,
      posterImage: `${IMAGES_PATH}${movie.poster_path}`,
    };
  });
}

export const createCastDetails = cast => {
  return cast.map(person => {
    let image = person.profile_path
      ? `${IMAGES_PATH}${person.profile_path}`
      : personWithoutImage;

    return {
      actorName: person.original_name,
      characterName: person.character,
      actorID: person.id,
      profileImage: image,
    };
  });
};

export const createPersonDetails = personInfo => {
  let image = personInfo.profile_path
    ? `${IMAGES_PATH}${personInfo.profile_path}`
    : personWithoutImageBig;

  return {
    biography: personInfo.biography,
    birthday: personInfo.birthday,
    deathday: personInfo.deathday,
    gender: personInfo.gender,
    knownForDepartment: personInfo.known_for_department,
    name: personInfo.name,
    placeOfBirth: personInfo.place_of_birth,
    profileImage: image,
  };
};

export const createSearchedItems = items => {
  return items.map(item => {
    let profileImage = item.profile_path
      ? `${IMAGES_PATH}${item.profile_path}`
      : cardWithoutImage;

    let posterImage = item.poster_path
      ? `${IMAGES_PATH}${item.poster_path}`
      : cardWithoutImage;

    if (item.media_type === 'person') {
      const movies = item.known_for.map(movie => {
        return {
          id: movie.id,
          mediaType: movie.media_type,
          title: movie.title,
        };
      });

      return {
        profileImage: profileImage,
        name: item.name,
        mediaType: item.media_type,
        id: item.id,
        knownForDepartment: item.known_for_department,
        knownForMovies: movies,
      };
    } else {
      return {
        posterImage: posterImage,
        id: item.id,
        mediaType: item.media_type,
        title: item.title || item.original_name,
        releaseDate: item.release_date || item.first_air_date,
        overview: item.overview,
      };
    }
  });
};
