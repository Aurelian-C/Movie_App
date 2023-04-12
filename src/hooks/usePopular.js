import { useEffect, useState } from 'react';
import { AJAX, createCardDetails } from '../config/helpers';
import { API_URL, API_KEY } from '../config/config';

const INITIAL_ITEMS = [
  {
    title: 'Avatar: The Way of Water',
    posterImage:
      'https://image.tmdb.org/t/p/w500//t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
    backdropImage:
      'https://image.tmdb.org/t/p/w500//s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg',
    voteAverage: 7.9,
    id: 76600,
    releaseDate: 'Dec 14, 2022',
  },
  {
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    posterImage:
      'https://image.tmdb.org/t/p/w500//yUgFJ3A9IwDy7KhjvIxfUTeNeXO.jpg',
    backdropImage:
      'https://image.tmdb.org/t/p/w500//tuDhEdza074bA497bO9WFEPs6O6.jpg',
    voteAverage: 7.1,
    id: 411,
    releaseDate: 'Dec 7, 2005',
  },
  {
    title: 'Violent Night',
    posterImage:
      'https://image.tmdb.org/t/p/w500//1XSYOP0JjjyMz1irihvWywro82r.jpg',
    backdropImage:
      'https://image.tmdb.org/t/p/w500//6mEYUYdkKoVCMeYf3rTFj0L1uyv.jpg',
    voteAverage: 7.7,
    id: 899112,
    releaseDate: 'Nov 30, 2022',
  },
  {
    title: 'Troll',
    posterImage:
      'https://image.tmdb.org/t/p/w500//9z4jRr43JdtU66P0iy8h18OyLql.jpg',
    backdropImage:
      'https://image.tmdb.org/t/p/w500//53BC9F2tpZnsGno2cLhzvGprDYS.jpg',
    voteAverage: 6.7,
    id: 736526,
    releaseDate: 'Dec 1, 2022',
  },
  {
    title: 'Black Adam',
    posterImage:
      'https://image.tmdb.org/t/p/w500//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
    backdropImage:
      'https://image.tmdb.org/t/p/w500//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg',
    voteAverage: 7.2,
    id: 436270,
    releaseDate: 'Oct 19, 2022',
  },
  {
    title: 'The Woman King',
    posterImage:
      'https://image.tmdb.org/t/p/w500//438QXt1E3WJWb3PqNniK0tAE5c1.jpg',
    backdropImage:
      'https://image.tmdb.org/t/p/w500//7zQJYV02yehWrQN6NjKsBorqUUS.jpg',
    voteAverage: 7.8,
    id: 724495,
    releaseDate: 'Sep 15, 2022',
  },
  {
    title: 'Savage Salvation',
    posterImage:
      'https://image.tmdb.org/t/p/w500//fJRt3mmZEvf8gQzoNLzjPtWpc9o.jpg',
    backdropImage:
      'https://image.tmdb.org/t/p/w500//rodjjIJ8oh9nuBp86PhojcYHTEN.jpg',
    voteAverage: 5.3,
    id: 740952,
    releaseDate: 'Dec 2, 2022',
  },
  {
    title: "Guillermo del Toro's Pinocchio",
    posterImage:
      'https://image.tmdb.org/t/p/w500//vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg',
    backdropImage:
      'https://image.tmdb.org/t/p/w500//e782pDRAlu4BG0ahd777n8zfPzZ.jpg',
    voteAverage: 8.5,
    id: 555604,
    releaseDate: 'Nov 9, 2022',
  },
  {
    title: 'Prey for the Devil',
    posterImage:
      'https://image.tmdb.org/t/p/w500//w3s6XEDNVGq5LUlghqs6VlvsvL6.jpg',
    backdropImage:
      'https://image.tmdb.org/t/p/w500//7dm64SW5L5CCg47kAEAcdCGaq5i.jpg',
    voteAverage: 6.9,
    id: 676547,
    releaseDate: 'Oct 23, 2022',
  },
  {
    title: 'The Big 4',
    posterImage:
      'https://image.tmdb.org/t/p/w500//jrw684BhFJZ9Jac6KJda3hSQkxt.jpg',
    backdropImage:
      'https://image.tmdb.org/t/p/w500//ecaB1LUoQE1ylZJVF5KLRTkewt8.jpg',
    voteAverage: 7,
    id: 683328,
    releaseDate: 'Dec 19, 2022',
  },
  {
    title: 'Avatar',
    posterImage:
      'https://image.tmdb.org/t/p/w500//jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg',
    backdropImage:
      'https://image.tmdb.org/t/p/w500//o0s4XsEDfDlvit5pDRKjzXR4pp2.jpg',
    voteAverage: 7.5,
    id: 19995,
    releaseDate: 'Dec 15, 2009',
  },
  {
    title: 'My Name Is Vendetta',
    posterImage:
      'https://image.tmdb.org/t/p/w500//7l3war94J4tRyWUiLAGokr3ViF2.jpg',
    backdropImage:
      'https://image.tmdb.org/t/p/w500//83IYtUhc7Vs8XYi5UYc2lUKuyMo.jpg',
    voteAverage: 6.7,
    id: 873126,
    releaseDate: 'Nov 30, 2022',
  },
  {
    title: 'A Frozen Rooster',
    posterImage:
      'https://image.tmdb.org/t/p/w500//gBBCBMXKzWRADtliUYfV69aVIcz.jpg',
    backdropImage:
      'https://image.tmdb.org/t/p/w500//qdFrqXYH6PtyAVlegub7bpoSgro.jpg',
    voteAverage: 8.4,
    id: 573171,
    releaseDate: 'Dec 14, 2022',
  },
  {
    title: 'Black Panther: Wakanda Forever',
    posterImage:
      'https://image.tmdb.org/t/p/w500//sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
    backdropImage:
      'https://image.tmdb.org/t/p/w500//xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
    voteAverage: 7.5,
    id: 505642,
    releaseDate: 'Nov 9, 2022',
  },
  {
    title: 'Lesson Plan',
    posterImage:
      'https://image.tmdb.org/t/p/w500//wawP3mOUeRBrAtnbPwWK5eFaMdV.jpg',
    backdropImage:
      'https://image.tmdb.org/t/p/w500//dsWxCsAdsocMNQFbhe39ynAOhBa.jpg',
    voteAverage: 6.3,
    id: 1049233,
    releaseDate: 'Nov 23, 2022',
  },
  {
    title: 'Detective Knight: Rogue',
    posterImage:
      'https://image.tmdb.org/t/p/w500//2wj5iUJ2B5AQ1lFctJgUrHHsp9B.jpg',
    backdropImage:
      'https://image.tmdb.org/t/p/w500//zNE4oUkZnpbCpFiJbbaX4YJOPmE.jpg',
    voteAverage: 6.3,
    id: 1024546,
    releaseDate: 'Oct 21, 2022',
  },
  {
    title: 'The Independent',
    posterImage:
      'https://image.tmdb.org/t/p/w500//eC0EE0UvC0CE0mCkV8w9NK0iaYr.jpg',
    backdropImage:
      'https://image.tmdb.org/t/p/w500//86uhKWx1PyKfUXyu0bCyxCgcs2L.jpg',
    voteAverage: 7.3,
    id: 878183,
    releaseDate: 'Nov 2, 2022',
  },
  {
    title: 'R.I.P.D. 2: Rise of the Damned',
    posterImage:
      'https://image.tmdb.org/t/p/w500//g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg',
    backdropImage:
      'https://image.tmdb.org/t/p/w500//kmzppWh7ljL6K9fXW72bPN3gKwu.jpg',
    voteAverage: 6.7,
    id: 1013860,
    releaseDate: 'Nov 15, 2022',
  },
  {
    title: 'The Boss Baby: Christmas Bonus',
    posterImage:
      'https://image.tmdb.org/t/p/w500//iMmMxF6f2OonUrXrHKBLSYAhXly.jpg',
    backdropImage:
      'https://image.tmdb.org/t/p/w500//2T92w8l2iTnyG9jwOmIWfM9thRV.jpg',
    voteAverage: 6.7,
    id: 1045944,
    releaseDate: 'Dec 6, 2022',
  },
  {
    title: 'Night at the Museum: Kahmunrah Rises Again',
    posterImage:
      'https://image.tmdb.org/t/p/w500//zo5iCQFZRgpLldUnOHcCHT943Sq.jpg',
    backdropImage:
      'https://image.tmdb.org/t/p/w500//6rax7iv5yQtldc3ApEvrheJf8uw.jpg',
    voteAverage: 7,
    id: 751741,
    releaseDate: 'Dec 9, 2022',
  },
];

export default function usePopular(mediaType) {
  const [items, setItems] = useState(INITIAL_ITEMS);

  useEffect(() => {
    async function fetchData() {
      try {
        const { results } = await AJAX(
          `${API_URL}${mediaType}/popular?api_key=${API_KEY}`
        );
        setItems(results.map(createCardDetails));
      } catch (err) {
        throw err;
      }
    }
    if (mediaType) {
      fetchData();
    }
  }, [mediaType]);

  return items;
}
