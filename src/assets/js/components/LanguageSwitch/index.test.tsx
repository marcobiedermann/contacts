import { render } from '@testing-library/react';
import React from 'react';
import LanguageSwitch from '.';

describe('language switch component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<LanguageSwitch languages={['de', 'en']} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
