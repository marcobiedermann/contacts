import { render } from '@testing-library/react';
import React from 'react';
import Router from '.';
import props from './__fixtures__';

describe('router component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Router {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
