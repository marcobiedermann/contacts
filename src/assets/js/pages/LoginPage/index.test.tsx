import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import LoginPage from '.';
import Providers from '../../components/Providers';

describe('login page component', () => {
  it('should redirect to `/`', () => {
    expect.assertions(1);

    const { asFragment } = render(
      <Providers>
        <MemoryRouter>
          <Route component={LoginPage} />
        </MemoryRouter>
      </Providers>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
