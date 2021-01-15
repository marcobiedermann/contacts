import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import LanguageSwitch from '../../components/LanguageSwitch';

const SettingsPage: FC<RouteComponentProps> = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('pages:settings')}</title>
      </Helmet>
      <LanguageSwitch languages={['en', 'de']} />
    </>
  );
};

export default SettingsPage;
