import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from '../../components/LanguageSwitch';

function SettingsPage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('pages:settings')}</title>
      </Helmet>
      <LanguageSwitch languages={['en', 'de']} />
    </>
  );
}

export default SettingsPage;
