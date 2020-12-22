import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '.';

describe('footer component', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer.create(<Footer />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
