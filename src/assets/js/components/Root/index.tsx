import React from 'react';
import routes from '../../constants/routes';
import Providers from '../Providers';
import Router from '../Router';

function Root(): JSX.Element {
  return (
    <Providers>
      <Router routes={routes} />
    </Providers>
  );
}

export default Root;
