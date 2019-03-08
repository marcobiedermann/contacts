import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import * as routes from '../../constants/routes';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={routes.INDEX}
            activeClassName="is-active"
            exact
          >
            {t('pages:home')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.CONTACTS}
            activeClassName="is-active"
            exact
          >
            {t('pages:contacts')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.NEW}
            activeClassName="is-active"
            exact
          >
            {t('pages:new')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.LOGIN}
            activeClassName="is-active"
            exact
          >
            {t('pages:login')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.REGISTER}
            activeClassName="is-active"
            exact
          >
            {t('pages:register')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
