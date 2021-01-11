import { render } from '@testing-library/react';
import React from 'react';
import Main from '.';

describe('main component', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Main />);

    expect(asFragment).toMatchSnapshot();
  });
});
