import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import PersonPresentation from '../components/Presentation/PersonPresentation';
import { createPersonsList } from '../helpers/helpers';

export default function PersonsPage() {
  const {
    details: { data, identifier, mediaType },
  } = useLoaderData();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={data}>
        {data => {
          const results = createPersonsList(data.results);
          return (
            <PersonPresentation
              data={results}
              totalPages={data.total_pages}
              identifier={identifier}
              mediaType={mediaType}
            />
          );
        }}
      </Await>
    </Suspense>
  );
}
