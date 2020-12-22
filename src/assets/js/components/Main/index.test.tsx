import React from 'react';
import renderer from 'react-test-renderer';
import Main from '.';

describe('main component', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer.create(<Main />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
