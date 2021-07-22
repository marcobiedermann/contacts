import { render } from '@testing-library/react';
import React from 'react';
import Label from '..';

describe('label component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { container } = render(<Label htmlFor="input">Label</Label>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
