import { render } from '@testing-library/react';
import React from 'react';
import ContactNew, { ContactNewProps } from '.';

describe('contact new component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const props: ContactNewProps = {
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

    const { asFragment } = render(<ContactNew {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
