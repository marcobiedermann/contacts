import { render } from '@testing-library/react';
import React from 'react';
import Grid from '..';

describe('grid component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { container } = render(<Grid>Grid</Grid>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
