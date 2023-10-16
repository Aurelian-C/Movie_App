import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import PersonPresentation from '../ui/Presentation/PersonPresentation';
import LoadingPersons from '../ui/Cards/LoadingPersons/LoadingPersons';
import { createPersonsList } from '../helpers/helpers';

export default function PersonsPage() {
  const {
    details: { data, identifier, mediaType },
  } = useLoaderData();

  return (
    <Suspense fallback={<LoadingPersons />}>
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
