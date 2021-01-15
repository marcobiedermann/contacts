import { render } from '@testing-library/react';
import React from 'react';
import Phone from '..';
import props from '../__fixtures__';

describe('phone component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Phone {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
