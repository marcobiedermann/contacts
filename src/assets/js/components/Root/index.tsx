import React, { FC } from 'react';
import routes from '../../constants/routes';
import Providers from '../Providers';
import Router from '../Router';

const Root: FC = () => (
  <Providers>
    <Router routes={routes} />
  </Providers>
);

export default Root;
