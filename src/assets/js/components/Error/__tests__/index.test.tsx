import { render } from '@testing-library/react';
import React from 'react';
import Error from '..';

describe('error component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Error>Error Message</Error>);

    expect(asFragment()).toMatchSnapshot();
  });
});
