import React from 'react';
import { RouterProps } from '..';

const HomePage = () => <div>Home</div>;

const props: RouterProps = {
  routes: [
    {
      component: HomePage,
      name: 'Home',
      path: '/',
    },
  ],
};

export default props;
