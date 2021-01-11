import React, { FC, Suspense } from 'react';
import routes from '../../constants/routes';
import Loader from '../Loader';
import Providers from '../Providers';
import Router from '../Router';

const Root: FC = () => (
  <Providers>
    <Suspense fallback={<Loader />}>
      <Router routes={routes} />
    </Suspense>
  </Providers>
);

export default Root;
