import {
  // TIMEOUT_FETCH,
  IMAGES_PATH_BIG,
  POSTER_PATH_SMALL,
  POSTER_PATH_MEDIUM,
  BACKDROP_PATH_SMALL,
  BACKDROP_PATH_MEDIUM,
  LOGO_PATH_MEDIUM,
  PROFILE_PATH_MEDIUM,
  PROFILE_PATH_SMALL,
  API_URL,
  API_KEY,
  PROFILE_PATH_BIG,
} from '../config/config';
import personWithoutImage from '../assets/img/person_with_no_image.png';
import personWithoutImageBig from '../assets/img/person_with_no_image_big.png';
import cardWithoutImage from '../assets/img/placeholder_content_img1.jpg';
import companyWithoutLogo from '../assets/img/company_without_logo.png';
import movieWithoutImage from '../assets/img/no_movie_image_big.jpg';
import backdropWithoutImage from '../assets/img/backdrop_with_no_image.jpg';

export async function fetchMotion(mediaType, identifier, pageNumber = 1) {
  const response = await fetch(
    `${API_URL}/${mediaType}/${identifier}?page=${pageNumber}&api_key=${API_KEY}`
  );
  const data = await response.json();
  console.log(data);
  return data;
}

export const createUpcomingDetails = items => {
  return items.map(item => {
    const date = item.first_air_date || item.release_date;
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    const releaseDate = new Date(date).toLocaleString('en-US', options);

    let backdropImage = item.backdrop_path
      ? `${BACKDROP_PATH_MEDIUM}${item.backdrop_path}`
      : backdropWithoutImage;

    let posterImage = item.poster_path
      ? `${POSTER_PATH_SMALL}${item.poster_path}`
      : cardWithoutImage;

    const title = item.title || item.name || item.original_name;

    return {
      title,
      backdropImage,
      posterImage,
      releaseDate,
      overview: item.overview,
      popularity: item.popularity,
      id: item.id,
      mediaType: item.mediaType,
    };
  });
};

export const createCardDetails = result => {
  const date = result.first_air_date || result.release_date;
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const releaseDate = new Date(date).toLocaleString('en-US', options);

  let backdropImage = result.backdrop_path
    ? `${BACKDROP_PATH_SMALL}${result.backdrop_path}`
    : cardWithoutImage;

  let posterImage = result.poster_path
    ? `${POSTER_PATH_SMALL}${result.poster_path}`
    : cardWithoutImage;

  return {
    ...result,
    title: result.title || result.name || result.original_name,
    backdrop_path: backdropImage,
    poster_path: posterImage,
    vote_average: +Number.parseFloat(result.vote_average).toFixed(1),
    release_date: releaseDate,
  };
};

export const createMovieDetails = result => {
  const date = result.release_date;
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const releaseDate = new Date(date).toLocaleString('en-US', options);

  const collections = result.belongs_to_collection
    ? {
        ...result.belongs_to_collection,
        backdrop_path: `${BACKDROP_PATH_MEDIUM}${result.belongs_to_collection.backdrop_path}`,
        poster_path: `${POSTER_PATH_SMALL}${result.belongs_to_collection.poster_path}`,
      }
    : null;

  const productionCompanies = result.production_companies
    ? result.production_companies.map(company => {
        return {
          ...company,
          logo_path: company.logo_path
            ? `${LOGO_PATH_MEDIUM}${company.logo_path}`
            : companyWithoutLogo,
        };
      })
    : null;

  let posterImage = result.poster_path
    ? `${POSTER_PATH_MEDIUM}${result.poster_path}`
    : movieWithoutImage;

  const runtime = {
    hours: Math.floor(result.runtime / 60),
    minutes: result.runtime % 60,
  };

  return {
    ...result,
    title: result.title || result.original_title,
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

export const createTvDetails = tv => {
  const date = tv.first_air_date;
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const firstAirDate = new Date(date).toLocaleString('en-US', options);

  const productionCompanies = tv.production_companies
    ? tv.production_companies.map(company => {
        return {
          ...company,
          logo_path: company.logo_path
            ? `${LOGO_PATH_MEDIUM}${company.logo_path}`
            : companyWithoutLogo,
        };
      })
    : null;

  let posterImage = tv.poster_path
    ? `${POSTER_PATH_MEDIUM}${tv.poster_path}`
    : movieWithoutImage;

  const seasons = tv.seasons.map(season => {
    return {
      ...season,
      poster_path: `${POSTER_PATH_MEDIUM}${season.poster_path}`,
    };
  });

  return {
    ...tv,
    name: tv.name || tv.original_name,
    backdrop_path: `${IMAGES_PATH_BIG}${tv.backdrop_path}`,
    poster_path: posterImage,
    vote_average: +Number.parseFloat(tv.vote_average).toFixed(1),
    first_air_date: firstAirDate,
    production_companies: productionCompanies,
    seasons: seasons,
  };
};

export function createMovieCredits(movies) {
  return movies.map(movie => {
    return {
      ...movie,
      poster_path: movie.poster_path
        ? `${POSTER_PATH_SMALL}${movie.poster_path}`
        : cardWithoutImage,
    };
  });
}

export const createCastDetails = cast => {
  return cast.map(person => {
    let image = person.profile_path
      ? `${PROFILE_PATH_MEDIUM}${person.profile_path}`
      : personWithoutImage;

    return {
      ...person,
      profile_path: image,
    };
  });
};

export const createCrewDetails = crew => {
  return crew.map(person => {
    let image = person.profile_path
      ? `${PROFILE_PATH_SMALL}${person.profile_path}`
      : personWithoutImage;

    return {
      ...person,
      profile_path: image,
    };
  });
};

export const createPersonDetails = person => {
  let image = person.profile_path
    ? `${PROFILE_PATH_BIG}${person.profile_path}`
    : personWithoutImageBig;

  return {
    ...person,
    profile_path: image,
  };
};

export const createPersonsList = list => {
  return list.map(person => {
    const gender = person.gender === 1 ? 'Female' : 'Male';
    const profileImage = person.profile_path
      ? `${PROFILE_PATH_MEDIUM}${person.profile_path}`
      : personWithoutImage;

    const knownFor = person.known_for
      .map(item => {
        const posterImage = item.poster_path
          ? `${POSTER_PATH_SMALL}${item.poster_path}`
          : cardWithoutImage;
        const date = item.release_date || item.first_air_date;
        const releaseYear = new Date(date).getFullYear();

        return {
          ...item,
          poster_path: posterImage,
          releaseYear,
        };
      })
      .sort((a, b) => {
        if (a.releaseYear > b.releaseYear) return -1;
        if (a.releaseYear < b.releaseYear) return 1;
        return 0;
      });

    return {
      ...person,
      gender,
      profile_path: profileImage,
      known_for: knownFor,
    };
  });
};

export const createSearchedItems = items => {
  return items.map(item => {
    let profileImage = item.profile_path
      ? `${PROFILE_PATH_MEDIUM}${item.profile_path}`
      : cardWithoutImage;

    let posterImage = item.poster_path
      ? `${POSTER_PATH_SMALL}${item.poster_path}`
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
          backdrop_path: `${BACKDROP_PATH_SMALL}${part.backdrop_path}`,
          poster_path: `${POSTER_PATH_SMALL}${part.poster_path}`,
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

export function asyncDelay(seconds) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

export function formatLastViewDate(lastViewTimestamp) {
  const locales = navigator.language;

  const date = new Intl.DateTimeFormat(locales, {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(lastViewTimestamp);

  return date.split(',');
}

export function buildFilteredVersesByBook(versesArray) {
  let filteredVersesByBook = [];
  versesArray.forEach(verse => {
    const isContain = filteredVersesByBook.some(
      filteredVerse => filteredVerse.bookId === verse.book_id.book_id
    );

    if (isContain) {
      const idx = filteredVersesByBook.findIndex(
        filteredVerse => filteredVerse.bookId === verse.book_id.book_id
      );

      filteredVersesByBook[idx].verses.push({
        chapterNumber: verse.chapter_id.chapter_number,
        verseNumber: verse.verse_number,
        verseText: verse.verse_text,
        id: verse.verse_id,
      });
    } else {
      filteredVersesByBook.push({
        bookTitle: verse.book_id.book_title,
        bookId: verse.book_id.book_id,
        bookTitleShort: verse.book_id.book_title_short,
        verses: [
          {
            chapterNumber: verse.chapter_id.chapter_number,
            verseNumber: verse.verse_number,
            verseText: verse.verse_text,
            id: verse.verse_id,
          },
        ],
      });
    }
  });

  return filteredVersesByBook;
}

export function groupByConsecutiveNumbers(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }

  const result = [];
  let currentGroup = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    const currentNumber = arr[i].verseOrder;
    const previousNumber = arr[i - 1].verseOrder;

    if (currentNumber === previousNumber + 1) {
      currentGroup.push(arr[i]);
    } else {
      result.push(currentGroup);
      currentGroup = [arr[i]];
    }
  }

  // Push the last group
  result.push(currentGroup);

  return result;
}

// Check if an email is valid
export function isValidEmail(email) {
  // Define the regular expression pattern for a valid email address
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Use test() method to check if the input matches the pattern
  return emailPattern.test(email);
}

// Check if a text contains a capital letter
export function containsCapitalLetter(text) {
  // Regular expression to check for at least one capital letter
  const capitalLetterRegex = /[A-Z]/;

  // Test if the text contains a capital letter
  return capitalLetterRegex.test(text);
}

// Check if a text contains a small letter that is not a empty string
export function containsNonEmptySmallLetter(text) {
  // Regular expression to check for at least one lowercase letter
  const smallLetterRegex = /[a-z]/;

  // Test if the text contains a lowercase letter and is not empty
  return smallLetterRegex.test(text);
}

// Check if a text contains a number
export function containsNumber(text) {
  // Regular expression to check for at least one digit
  const numberRegex = /\d/;

  // Test if the text contains a digit
  return numberRegex.test(text);
}

// Check if a text contains special character
export function containsSpecialCharacter(text) {
  // Regular expression to check for at least one special character or symbol
  const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

  // Test if the text contains a special character
  return specialCharacterRegex.test(text);
}
