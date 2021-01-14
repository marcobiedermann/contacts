import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Contacts, { ContactsProps } from '.';

describe('contacts component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const props: ContactsProps = {
      contacts: [
        {
          id: '1',
          name: {
            firstName: 'John',
            lastName: 'Doe',
          },
        },
      ],
    };

    const { asFragment } = render(
      <MemoryRouter>
        <Contacts {...props} />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
