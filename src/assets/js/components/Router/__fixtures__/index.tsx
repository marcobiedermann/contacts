import React, { FC } from 'react';
import { RouterProps } from '..';

const HomePage: FC = () => <div>Home</div>;

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
