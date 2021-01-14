import { render } from '@testing-library/react';
import React from 'react';
import Loader from '.';

describe('loader component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Loader />);

    expect(asFragment()).toMatchSnapshot();
  });
});
