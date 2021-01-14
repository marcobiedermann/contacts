import { render } from '@testing-library/react';
import React from 'react';
import Footer from '.';

describe('footer component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Footer>Footer</Footer>);

    expect(asFragment()).toMatchSnapshot();
  });
});
