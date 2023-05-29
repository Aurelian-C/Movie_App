import Tv from '../components/Tv/Tv';
import { API_KEY, API_URL } from '../config/config';
import { defer } from 'react-router-dom';
import { useEffect } from 'react';

export default function TvDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Tv />
    </>
  );
}

// TV details fetch function
export async function fetchTvDetails(params) {
  const response = await fetch(
    `${API_URL}/tv/${params.tvId}?api_key=${API_KEY}`
  );
  const tv = await response.json();
  return tv;
}

export async function fetchTvCredits(params) {
  const response = await fetch(
    `${API_URL}/tv/${params.tvId}/credits?api_key=${API_KEY}`
  );
  const credits = await response.json();
  return credits;
}

// Loader for TVs
export async function tvLoader({ params }) {
  return defer({
    movie: await fetchTvDetails(params),
    credits: fetchTvCredits(params),
  });
}
