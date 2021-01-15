import { render } from '@testing-library/react';
import React from 'react';
import Email from '..';
import props from '../__fixtures__';

describe('email component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Email {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
