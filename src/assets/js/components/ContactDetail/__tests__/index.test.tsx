import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ContactDetail from '..';
import props from '../__fixtures__';

describe('contact detail component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { container } = render(
      <MemoryRouter>
        <ContactDetail {...props} />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
