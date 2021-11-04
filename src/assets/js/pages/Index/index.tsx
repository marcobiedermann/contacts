import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';

function IndexPage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('pages:home')}</title>
      </Helmet>
      <Redirect to="/contacts" />;
    </>
  );
}

export default IndexPage;
