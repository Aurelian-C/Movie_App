import React, { useEffect, useState } from 'react';
import SideMenu from './components/SideMenu/SideMenu';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import CardItems from './components/Card/CardItems';
import Footer from './components/Footer/Footer';

import {
  fetchSearchHints,
  fetchPopular,
  fetchTrendings,
} from './helpers/fetchData';

const popularity = {
  items: [
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
  ],
  categories: ['Movie', 'TV'],
  mainTitle: "What's popular",
};

const trending = {
  items: [
    {
      title: 'Glass Onion: A Knives Out Mystery',
      mediaType: 'movie',
      posterImage:
        'https://image.tmdb.org/t/p/w500//vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg',
      backdropImage:
        'https://image.tmdb.org/t/p/w500//dKqa850uvbNSCaQCV4Im1XlzEtQ.jpg',
      voteAverage: 7,
      id: 661374,
      releaseDate: 'Nov 23, 2022',
    },
    {
      title: 'Avatar: The Way of Water',
      mediaType: 'movie',
      posterImage:
        'https://image.tmdb.org/t/p/w500//t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
      backdropImage:
        'https://image.tmdb.org/t/p/w500//s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg',
      voteAverage: 7.9,
      id: 76600,
      releaseDate: 'Dec 14, 2022',
    },
    {
      title: 'The Witcher: Blood Origin',
      mediaType: 'tv',
      posterImage:
        'https://image.tmdb.org/t/p/w500//vpfJK9F0UJNcAIIeC42oJyKMnZQ.jpg',
      backdropImage:
        'https://image.tmdb.org/t/p/w500//hoVuI69nygLQBJ4FqgRKnukDeKt.jpg',
      voteAverage: 5.9,
      id: 106541,
      releaseDate: 'Dec 25, 2022',
    },
    {
      title: "Roald Dahl's Matilda the Musical",
      mediaType: 'movie',
      posterImage:
        'https://image.tmdb.org/t/p/w500//ga8R3OiOMMgSvZ4cOj8x7prUNYZ.jpg',
      backdropImage:
        'https://image.tmdb.org/t/p/w500//xmtXSBONN4fsznx0zo4NhJwHDTa.jpg',
      voteAverage: 7.2,
      id: 668482,
      releaseDate: 'Nov 25, 2022',
    },
    {
      title: 'Treason',
      mediaType: 'tv',
      posterImage:
        'https://image.tmdb.org/t/p/w500//qOitarv5B5ydsScN3dkJPipYPg3.jpg',
      backdropImage:
        'https://image.tmdb.org/t/p/w500//98bqsUBVjXpbUt1fRkjn7hJQXrq.jpg',
      voteAverage: 6.9,
      id: 157080,
      releaseDate: 'Dec 26, 2022',
    },
    {
      title: 'Strange World',
      mediaType: 'movie',
      posterImage:
        'https://image.tmdb.org/t/p/w500//mPywkW1dfDer6GxxTvjwOTsAVud.jpg',
      backdropImage:
        'https://image.tmdb.org/t/p/w500//1rukJHAP5p6DNHe75Oo1D0m3SnR.jpg',
      voteAverage: 6.4,
      id: 877269,
      releaseDate: 'Nov 23, 2022',
    },
    {
      title: 'Alice in Borderland',
      mediaType: 'tv',
      posterImage:
        'https://image.tmdb.org/t/p/w500//20mOwAAPwZ1vLQkw0fvuQHiG7bO.jpg',
      backdropImage:
        'https://image.tmdb.org/t/p/w500//bKxiLRPVWe2nZXCzt6JPr5HNWYm.jpg',
      voteAverage: 8.2,
      id: 110316,
      releaseDate: 'Dec 10, 2020',
    },
    {
      title: 'Wednesday',
      mediaType: 'tv',
      posterImage:
        'https://image.tmdb.org/t/p/w500//9PFonBhy4cQy7Jz20NpMygczOkv.jpg',
      backdropImage:
        'https://image.tmdb.org/t/p/w500//iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg',
      voteAverage: 8.7,
      id: 119051,
      releaseDate: 'Nov 23, 2022',
    },
    {
      title: 'A Night at the Kindergarten',
      mediaType: 'movie',
      posterImage:
        'https://image.tmdb.org/t/p/w500//r6tDFLtLzlzkm27OOOsdjlK58wD.jpg',
      backdropImage:
        'https://image.tmdb.org/t/p/w500//6yVbB3FL8c5GqYeqlBt0gxqNdf1.jpg',
      voteAverage: 5,
      id: 1065796,
      releaseDate: 'Dec 28, 2022',
    },
    {
      title: 'Violent Night',
      mediaType: 'movie',
      posterImage:
        'https://image.tmdb.org/t/p/w500//1XSYOP0JjjyMz1irihvWywro82r.jpg',
      backdropImage:
        'https://image.tmdb.org/t/p/w500//6mEYUYdkKoVCMeYf3rTFj0L1uyv.jpg',
      voteAverage: 7.8,
      id: 899112,
      releaseDate: 'Nov 30, 2022',
    },
    {
      title: '7 Women and a Murder',
      mediaType: 'movie',
      posterImage:
        'https://image.tmdb.org/t/p/w500//iz2tpJJgSDBS646VYhmNkUmot4l.jpg',
      backdropImage:
        'https://image.tmdb.org/t/p/w500//fsTJDKNAhF9QptmGvON8hSOUyWi.jpg',
      voteAverage: 5.7,
      id: 890541,
      releaseDate: 'Dec 25, 2021',
    },
    {
      title: 'Chainsaw Man',
      mediaType: 'tv',
      posterImage:
        'https://image.tmdb.org/t/p/w500//npdB6eFzizki0WaZ1OvKcJrWe97.jpg',
      backdropImage:
        'https://image.tmdb.org/t/p/w500//5DUMPBSnHOZsbBv81GFXZXvDpo6.jpg',
      voteAverage: 8.7,
      id: 114410,
      releaseDate: 'Oct 12, 2022',
    },
    {
      title: 'Top Gun: Maverick',
      mediaType: 'movie',
      posterImage:
        'https://image.tmdb.org/t/p/w500//62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
      backdropImage:
        'https://image.tmdb.org/t/p/w500//AaV1YIdWKnjAIAOe8UUKBFm327v.jpg',
      voteAverage: 8.3,
      id: 361743,
      releaseDate: 'May 24, 2022',
    },
    {
      title: 'Avatar',
      mediaType: 'movie',
      posterImage:
        'https://image.tmdb.org/t/p/w500//jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg',
      backdropImage:
        'https://image.tmdb.org/t/p/w500//o0s4XsEDfDlvit5pDRKjzXR4pp2.jpg',
      voteAverage: 7.5,
      id: 19995,
      releaseDate: 'Dec 15, 2009',
    },
    {
      title: 'The Boy, the Mole, the Fox and the Horse',
      mediaType: 'movie',
      posterImage:
        'https://image.tmdb.org/t/p/w500//oQRgyQCzcyZvE6w5heM9ktVY0LT.jpg',
      backdropImage:
        'https://image.tmdb.org/t/p/w500//yIFmewEYYghaonzndmEn3y0ij21.jpg',
      voteAverage: 7.7,
      id: 995133,
      releaseDate: 'Dec 2, 2022',
    },
    {
      title: 'Black Adam',
      mediaType: 'movie',
      posterImage:
        'https://image.tmdb.org/t/p/w500//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
      backdropImage:
        'https://image.tmdb.org/t/p/w500//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg',
      voteAverage: 7.2,
      id: 436270,
      releaseDate: 'Oct 19, 2022',
    },
    {
      title: 'Bleach',
      mediaType: 'tv',
      posterImage:
        'https://image.tmdb.org/t/p/w500//2EewmxXe72ogD0EaWM8gqa0ccIw.jpg',
      backdropImage:
        'https://image.tmdb.org/t/p/w500//qtfMr08KQsWXnCHY0a96N8NpQ2l.jpg',
      voteAverage: 8.4,
      id: 30984,
      releaseDate: 'Oct 5, 2004',
    },
    {
      title: 'Puss in Boots: The Last Wish',
      mediaType: 'movie',
      posterImage:
        'https://image.tmdb.org/t/p/w500//lmf0zzR7ritjOL3qumRh3hfvOFK.jpg',
      backdropImage:
        'https://image.tmdb.org/t/p/w500//r9PkFnRUIthgBp2JZZzD380MWZy.jpg',
      voteAverage: 8,
      id: 315162,
      releaseDate: 'Dec 7, 2022',
    },
    {
      title: 'Stuck with You',
      mediaType: 'movie',
      posterImage:
        'https://image.tmdb.org/t/p/w500//r010tHuiYLpE85q8iggUhkuJ5HK.jpg',
      backdropImage:
        'https://image.tmdb.org/t/p/w500//zSjUvBjJ5u5PdPkVDa0UEye9Zd9.jpg',
      voteAverage: 0,
      id: 1057648,
      releaseDate: 'Dec 28, 2022',
    },
    {
      title: 'Willow',
      mediaType: 'tv',
      posterImage:
        'https://image.tmdb.org/t/p/w500//jhdSPDlhswjN1r6O0pGP3ZvQgU8.jpg',
      backdropImage:
        'https://image.tmdb.org/t/p/w500//93SxdkiR3gBcbG5FxIt0DCBttul.jpg',
      voteAverage: 6.9,
      id: 111837,
      releaseDate: 'Nov 30, 2022',
    },
  ],
  categories: ['Day', 'Week'],
  mainTitle: 'Trendings',
};

const App = () => {
  const [sideMenuVisibility, setSideMenuVisibility] = useState(false);
  const [searchHints, setSearchHints] = useState([]);

  const showSideMenuHandler = () => {
    setSideMenuVisibility(true);
  };

  const hideSideMenuHandler = () => {
    setSideMenuVisibility(false);
  };

  const searchHintsHandler = async () => {
    const searchHints = await fetchSearchHints('trending', 'all', 'day');
    setSearchHints(searchHints);
  };

  useEffect(() => {
    searchHintsHandler();
  }, []);

  return (
    <>
      <Header
        onShowSideMenu={showSideMenuHandler}
        trendingItems={trending.items}
        searchHints={searchHints}
      />
      <SideMenu
        sideMenuVisibility={sideMenuVisibility}
        onHideSideMenu={hideSideMenuHandler}
      />
      <Search />
      <CardItems
        items={popularity.items}
        selectorCategories={popularity.categories}
        mainTitle={popularity.mainTitle}
        onFetch={fetchPopular}
      />
      <CardItems
        items={trending.items}
        selectorCategories={trending.categories}
        mainTitle={trending.mainTitle}
        onFetch={fetchTrendings}
      />
      <Footer />
    </>
  );
};

export default App;
