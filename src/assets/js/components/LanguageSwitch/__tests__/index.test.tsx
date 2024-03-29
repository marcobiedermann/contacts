import { render } from '@testing-library/react';
import React from 'react';
import LanguageSwitch from '..';
import props from '../__fixtures__';

describe('language switch component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { container } = render(<LanguageSwitch {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
