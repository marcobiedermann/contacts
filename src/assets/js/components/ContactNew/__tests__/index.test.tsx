import { render } from '@testing-library/react';
import React from 'react';
import ContactNew from '..';
import props from '../__fixtures__';

describe('contact new component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<ContactNew {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
