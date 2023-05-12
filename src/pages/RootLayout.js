import Header from '../components/Navigation/Header/Header';
import SideMenu from '../components/Navigation/Side/SideMenu';
import Footer from '../components/Footer/Footer';
import { useState } from 'react';
import { useSearchHints } from '../hooks/useSearchHints';
import { Outlet } from 'react-router-dom';

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

export default function RootLayout() {
  const [sideMenuVisibility, setSideMenuVisibility] = useState(false);

  const handleShowSideMenu = () => {
    setSideMenuVisibility(true);
  };

  const handleHideSideMenu = () => {
    setSideMenuVisibility(false);
  };

  const searchHints = useSearchHints('trending', 'all', 'day');

  return (
    <>
      <Header
        onShowSideMenu={handleShowSideMenu}
        trendingItems={trending.items}
        searchHints={searchHints}
      />
      <SideMenu
        sideMenuVisibility={sideMenuVisibility}
        onHideSideMenu={handleHideSideMenu}
      />
      <Outlet />
      <Footer />
    </>
  );
}
