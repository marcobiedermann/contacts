import { render } from '@testing-library/react';
import React from 'react';
import ContactEdit from '.';
import props from './__fixtures__';

describe('contact edit component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<ContactEdit {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
