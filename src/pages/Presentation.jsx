import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import MotionPresentation from '../components/Presentation/MotionPresentation';
import { createCardDetails } from '../helpers/helpers';
import LoadingPresentation from '../components/Cards/LoadingPresentation/LoadingPresentation';

export default function PresentationPage() {
  const {
    details: { data, identifier, mediaType },
  } = useLoaderData();

  return (
    <Suspense fallback={<LoadingPresentation />}>
      <Await resolve={data}>
        {data => {
          const results = data.results.map(createCardDetails);
          return (
            <MotionPresentation
              data={results}
              key={`${identifier}${mediaType}`}
              identifier={identifier}
              mediaType={mediaType}
              totalPages={data.total_pages}
            />
          );
        }}
      </Await>
    </Suspense>
  );
}
