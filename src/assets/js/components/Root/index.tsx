import React, { FC, Suspense } from 'react';
import Loader from '../Loader';
import Router from '../Router';

const Root: FC = () => (
  <Suspense fallback={<Loader />}>
    <Router />
  </Suspense>
);

export default Root;
