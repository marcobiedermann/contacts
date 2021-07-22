import { render } from '@testing-library/react';
import React from 'react';
import Loader from '..';

describe('loader component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { container } = render(<Loader />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
