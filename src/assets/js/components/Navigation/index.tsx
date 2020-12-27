import classNames from 'classnames';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { CONTACTS, CONTACT_NEW, LOGIN, LOGOUT, REGISTER } from '../../constants/routes';
import styles from './style.module.css';

export interface NavigationProps {
  inline?: boolean;
}

const Navigation: FC<NavigationProps> = (props) => {
  const { inline } = props;
  const { t } = useTranslation();

  return (
    <nav className={styles.navigation}>
      <ul
        className={classNames(styles.navigation__list, {
          [styles['navigation__list--inline']]: inline,
        })}
      >
        <li>
          <NavLink to={CONTACTS.path} activeClassName="is-active" exact>
            {t('pages:contacts')}
          </NavLink>
        </li>
        <li>
          <NavLink to={CONTACT_NEW.path} activeClassName="is-active" exact>
            {t('pages:new')}
          </NavLink>
        </li>
        <li>
          <NavLink to={LOGIN.path} activeClassName="is-active" exact>
            {t('pages:login')}
          </NavLink>
        </li>
        <li>
          <NavLink to={REGISTER.path} activeClassName="is-active" exact>
            {t('pages:register')}
          </NavLink>
        </li>
        <li>
          <NavLink to={LOGOUT.path} activeClassName="is-active" exact>
            {t('pages:logout')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
