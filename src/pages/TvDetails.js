import Tv from '../components/Tv/Tv';
import PersonCard from '../components/Cards/PersonCard/PersonCard';
import { API_KEY, API_URL } from '../config/config';
import { createCastDetails, createMovieDetails } from '../config/helpers';
import { Await, defer, useLoaderData } from 'react-router-dom';
import { Suspense, useEffect } from 'react';

export default function TvDetails() {
  const { tv, credits } = useLoaderData();
  console.log(tv);
  console.log(credits);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={tv}>
          {movie => {
            const tvDetail = createMovieDetails(tv);
            return <Tv tvDetail={tvDetail} />;
          }}
        </Await>
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={credits}>
          {credits => {
            const castDetails = createCastDetails(credits.cast);
            return <PersonCard castDetail={castDetails} />;
          }}
        </Await>
      </Suspense>
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
    tv: await fetchTvDetails(params),
    credits: fetchTvCredits(params),
  });
}