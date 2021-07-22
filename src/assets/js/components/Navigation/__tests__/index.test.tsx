import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '..';
import props from '../__fixtures__';

describe('navigation component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { container } = render(
      <MemoryRouter>
        <Navigation {...props} />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
