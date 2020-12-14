import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = (props) => {
  const { children } = props;
  const { i18n } = useTranslation();

  return (
    <header>
      {children}
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
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
