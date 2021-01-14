import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ContactDetail, { ContactDetailProps } from '.';

describe('contact detail component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const props: ContactDetailProps = {
      id: '1',
      name: {
        firstName: 'John',
        lastName: 'Doe',
      },
      address: {
        city: 'New York City',
        country: 'USA',
        streetAddress: 'Main Street',
        zipCode: '10001',
      },
      email: 'john.doe@gmail.com',
      phone: '+1 234 56789',
    };

    const { asFragment } = render(
      <MemoryRouter>
        <ContactDetail {...props} />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
