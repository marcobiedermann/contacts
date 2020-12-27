import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const SettingsPage: FC = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <ul>
        <li>
          <button type="button" onClick={() => i18n.changeLanguage('en')}>
            en
          </button>
        </li>
        <li>
          <button type="button" onClick={() => i18n.changeLanguage('de')}>
            de
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SettingsPage;
