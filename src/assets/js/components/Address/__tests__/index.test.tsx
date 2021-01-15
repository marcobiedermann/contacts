import { render } from '@testing-library/react';
import React from 'react';
import Address from '..';
import props from '../__fixtures__';

describe('address component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Address {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
