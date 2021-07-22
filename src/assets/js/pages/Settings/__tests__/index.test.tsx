import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import SettingsPage from '..';

describe('setting page component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { container } = render(
      <MemoryRouter>
        <Route component={SettingsPage} />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
