import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import LanguageSwitch from '../../components/LanguageSwitch';

const SettingsPage: FC<RouteComponentProps> = () => (
  <div>
    <LanguageSwitch languages={['en', 'de']} />
  </div>
);

export default SettingsPage;
