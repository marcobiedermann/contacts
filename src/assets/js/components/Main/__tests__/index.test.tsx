import { render } from '@testing-library/react';
import React from 'react';
import Main from '..';

describe('main component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Main>Main</Main>);

    expect(asFragment()).toMatchSnapshot();
  });
});
