import React from 'react';
import { useTranslation } from 'react-i18next';

export interface LanguageSwitchProps {
  languages: string[];
}

function LanguageSwitch(props: LanguageSwitchProps): JSX.Element {
  const { languages } = props;
  const { i18n } = useTranslation();

  return (
    <ul>
      {languages.map((language) => (
        <li key={language}>
          <button type="button" onClick={() => i18n.changeLanguage(language)}>
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default LanguageSwitch;
