import { render } from '@testing-library/react';
import React from 'react';
import Grid from '.';

describe('grid component', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Grid />);

    expect(asFragment).toMatchSnapshot();
  });
});
