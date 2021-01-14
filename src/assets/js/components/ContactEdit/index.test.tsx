import { render } from '@testing-library/react';
import React from 'react';
import ContactEdit, { ContactEditProps } from '.';

describe('contact edit component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const props: ContactEditProps = {
      initialValues: {
        address: {
          city: '',
          country: '',
          streetAddress: '',
          zipCode: '',
        },
        email: '',
        name: {
          firstName: '',
          lastName: '',
        },
        phone: '',
      },
      onSubmit: () => ({}),
    };

    const { asFragment } = render(<ContactEdit {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
