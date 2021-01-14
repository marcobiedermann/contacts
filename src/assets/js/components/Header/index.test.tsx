import { render } from '@testing-library/react';
import React from 'react';
import Header from '.';

describe('header component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Header>Header</Header>);

    expect(asFragment()).toMatchSnapshot();
  });
});
