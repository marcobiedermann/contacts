import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ContactPreview from '..';
import props from '../__fixtures__';

describe('contact preview component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { container } = render(
      <MemoryRouter>
        <ContactPreview {...props} />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
