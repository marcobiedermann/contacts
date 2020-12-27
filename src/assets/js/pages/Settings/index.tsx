import React, { FC } from 'react';
import LanguageSwitch from '../../components/LanguageSwitch';

const SettingsPage: FC = () => (
  <div>
    <LanguageSwitch languages={['en', 'de']} />
  </div>
);

export default SettingsPage;
