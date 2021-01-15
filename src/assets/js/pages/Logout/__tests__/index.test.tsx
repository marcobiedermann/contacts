import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Route, Router } from 'react-router-dom';
import LogoutPage from '..';
import Providers from '../../../components/Providers';

describe('logout page component', () => {
  it('should redirect to `/`', () => {
    expect.assertions(1);

    const history = createMemoryHistory();

    render(
      <Providers>
        <Router history={history}>
          <Route component={LogoutPage} />
        </Router>
      </Providers>,
    );

    expect(history.location.pathname).toStrictEqual('/');
  });
});
