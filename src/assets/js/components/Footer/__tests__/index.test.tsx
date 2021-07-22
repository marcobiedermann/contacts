import { render } from '@testing-library/react';
import React from 'react';
import Footer from '..';

describe('footer component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { container } = render(<Footer>Footer</Footer>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
