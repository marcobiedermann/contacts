import { render } from '@testing-library/react';
import React from 'react';
import Router from '..';
import props from '../__fixtures__';

describe('router component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { container } = render(<Router {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
