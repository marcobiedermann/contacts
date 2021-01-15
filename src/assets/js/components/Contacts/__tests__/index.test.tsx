import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Contacts from '..';
import props from '../__fixtures__';

describe('contacts component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(
      <MemoryRouter>
        <Contacts {...props} />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
