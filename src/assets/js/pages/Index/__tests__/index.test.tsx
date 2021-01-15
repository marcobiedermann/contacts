import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Route, Router } from 'react-router-dom';
import IndexPage from '..';

describe('index page component', () => {
  it('should redirect to `/contacts`', () => {
    expect.assertions(1);

    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Route component={IndexPage} />
      </Router>,
    );

    expect(history.location.pathname).toStrictEqual('/contacts');
  });
});
