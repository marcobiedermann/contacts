import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Redirect, RouteComponentProps } from 'react-router-dom';

const IndexPage: FC<RouteComponentProps> = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t('pages:home')}</title>
      </Helmet>
      <Redirect to="/contacts" />;
    </div>
  );
};

export default IndexPage;
