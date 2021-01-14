import { render } from '@testing-library/react';
import React from 'react';
import Router, { RouterProps } from '.';

const HomePage = () => <div>Home</div>;

describe('router component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const props: RouterProps = {
      routes: [
        {
          component: HomePage,
          name: 'Home',
          path: '/',
        },
      ],
    };

    const { asFragment } = render(<Router {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
