import { render } from '@testing-library/react';
import React from 'react';
import Label from '.';

describe('label component', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Label htmlFor="input" />);

    expect(asFragment).toMatchSnapshot();
  });
});
