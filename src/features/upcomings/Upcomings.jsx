import { Suspense } from 'react';
import { Await, useRouteLoaderData } from 'react-router-dom';
import { createUpcomingDetails } from '../../helpers/helpers';
import Upcoming from './Upcoming';

function Upcomings() {
  const { upcomings } = useRouteLoaderData('route-data');

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={upcomings}>
        {upcomings => {
          const upcomingItems = createUpcomingDetails(upcomings);
          return <Upcoming upcomingItems={upcomingItems} />;
        }}
      </Await>
    </Suspense>
  );
}

export default Upcomings;
