import React from 'react';
import renderer from 'react-test-renderer';
import Label from '.';

describe('label component', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer.create(<Label htmlFor="input" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
