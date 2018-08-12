import PropTypes from 'prop-types';
import React from 'react';
import { translate } from 'react-i18next';

const Header = ({ children, i18n }) => (
  <header className="header">
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

Header.propTypes = {
  children: PropTypes.node,
  i18n: PropTypes.shape(),
};

Header.defaultProps = {
  children: null,
  i18n: null,
};

export default translate('common')(Header);
