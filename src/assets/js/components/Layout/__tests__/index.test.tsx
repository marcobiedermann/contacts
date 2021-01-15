import { render } from '@testing-library/react';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import Layout from '..';
import i18n from '../../../utils/i18n';

describe('layout component', () => {
  it('should render correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Layout>Layout</Layout>
        </MemoryRouter>
      </I18nextProvider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
