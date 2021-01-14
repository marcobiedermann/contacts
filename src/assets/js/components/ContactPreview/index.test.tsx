import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ContactPreview, { ContactPreviewProps } from '.';

describe('contact preview component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const props: ContactPreviewProps = {
      id: '1',
      name: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };

    const { asFragment } = render(
      <MemoryRouter>
        <ContactPreview {...props} />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
