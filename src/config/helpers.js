import { TIMEOUT_FETCH, IMAGES_PATH, IMAGES_PATH_BIG } from './config';
import personWithoutImage from '../assets/img/person_with_no_image.png';
import personWithoutImageBig from '../assets/img/person_with_no_image_big.png';
import cardWithoutImage from '../assets/img/placeholder_content_img1.jpg';
import companyWithoutLogo from '../assets/img/company_without_logo.png';

export const asyncDelay = function (seconds) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
};

export const timeout = function (seconds) {
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
    ...result,
    title: result.title || result.name || result.original_name,
    backdrop_path: `${IMAGES_PATH}${result.backdrop_path}`,
    poster_path: posterImage,
    vote_average: +Number.parseFloat(result.vote_average).toFixed(1),
    release_date: releaseDate,
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

  const collections = result.belongs_to_collection
    ? {
        ...result.belongs_to_collection,
        backdrop_path: `${IMAGES_PATH}${result.belongs_to_collection.backdrop_path}`,
        poster_path: `${IMAGES_PATH}${result.belongs_to_collection.poster_path}`,
      }
    : null;

  const productionCompanies = result.production_companies
    ? result.production_companies.map(company => {
        return {
          ...company,
          logo_path: company.logo_path
            ? `${IMAGES_PATH}${company.logo_path}`
            : companyWithoutLogo,
        };
      })
    : null;

  let posterImage = result.poster_path
    ? `${IMAGES_PATH}${result.poster_path}`
    : `${IMAGES_PATH}${result.profile_path}`;

  const runtime = {
    hours: Math.floor(result.runtime / 60),
    minutes: result.runtime % 60,
  };

  return {
    ...result,
    title: result.title || result.name || result.original_name,
    backdrop_path: `${IMAGES_PATH_BIG}${result.backdrop_path}`,
    poster_path: posterImage,
    vote_average: +Number.parseFloat(result.vote_average).toFixed(1),
    release_date: releaseDate,
    runtime: runtime,
    belongs_to_collection: collections,
    production_companies: productionCompanies,
    budget: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(result.budget),
    revenue: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(result.revenue),
  };
};

export function createMovieCredits(movies) {
  return movies.map(movie => {
    return {
      ...movie,
      poster_path: `${IMAGES_PATH}${movie.poster_path}`,
    };
  });
}

export const createCastDetails = cast => {
  return cast.map(person => {
    let image = person.profile_path
      ? `${IMAGES_PATH}${person.profile_path}`
      : personWithoutImage;

    return {
      ...person,
      profile_path: image,
    };
  });
};

export const createPersonDetails = person => {
  let image = person.profile_path
    ? `${IMAGES_PATH}${person.profile_path}`
    : personWithoutImageBig;

  return {
    ...person,
    profile_path: image,
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
      return {
        ...item,
        profile_path: profileImage,
      };
    } else {
      return {
        ...item,
        poster_path: posterImage,
        title: item.title || item.original_name,
        release_date: item.release_date || item.first_air_date,
      };
    }
  });
};

export const createCollectionDetails = collection => {
  let parts = collection?.parts
    ? collection.parts.map(part => {
        return {
          ...part,
          backdrop_path: `${IMAGES_PATH}${part.backdrop_path}`,
          poster_path: `${IMAGES_PATH}${part.poster_path}`,
        };
      })
    : null;

  return {
    ...collection,
    backdrop_path: `${IMAGES_PATH_BIG}${collection.backdrop_path}`,
    poster_path: `${IMAGES_PATH_BIG}${collection.poster_path}`,
    parts: parts,
  };
};

let timeoutID;
export function debounce(func, query, timeout = 1000) {
  if (timeoutID) clearTimeout(timeoutID);

  timeoutID = setTimeout(() => {
    func(query);
  }, timeout);
}
