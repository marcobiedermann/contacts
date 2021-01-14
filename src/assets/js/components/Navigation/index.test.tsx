import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '.';

describe('navigation component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(
      <MemoryRouter>
        <Navigation
          routes={[
            {
              name: 'Home',
              path: '/',
            },
          ]}
        />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
