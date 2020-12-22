import React from 'react';
import renderer from 'react-test-renderer';
import Grid from '.';

describe('grid component', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer.create(<Grid />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
