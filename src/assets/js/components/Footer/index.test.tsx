import { render } from '@testing-library/react';
import React from 'react';
import Footer from '.';

describe('footer component', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Footer />);

    expect(asFragment).toMatchSnapshot();
  });
});
