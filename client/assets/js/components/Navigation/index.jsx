import PropTypes from 'prop-types';
import React from 'react';
import { translate } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Navigation = ({ t }) => (
  <nav>
    <ul>
      <li>
        <NavLink
          to="/"
          activeClassName="is-active"
          exact
        >
          {t('home')}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contacts"
          activeClassName="is-active"
          exact
        >
          {t('contacts')}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/new"
          activeClassName="is-active"
          exact
        >
          {t('new')}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          activeClassName="is-active"
          exact
        >
          {t('login')}
        </NavLink>
      </li>
    </ul>
  </nav>
);

Navigation.propTypes = {
  t: PropTypes.func,
};

Navigation.defaultProps = {
  t: () => {},
};

export default translate('pages')(Navigation);
