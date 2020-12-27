import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitchProps {
  languages: string[];
}

const LanguageSwitch: FC<LanguageSwitchProps> = (props) => {
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
};

export default LanguageSwitch;
