import { render } from '@testing-library/react';
import React from 'react';
import Error from '..';

describe('error component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { container } = render(<Error>Error Message</Error>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
