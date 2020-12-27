import classNames from 'classnames';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import styles from './style.module.css';

interface Route {
  name: string;
  path: string;
}

export interface NavigationProps {
  inline?: boolean;
  routes: Route[];
}

const Navigation: FC<NavigationProps> = (props) => {
  const { inline, routes } = props;
  const { t } = useTranslation();

  return (
    <nav className={styles.navigation}>
      <ul
        className={classNames(styles.navigation__list, {
          [styles['navigation__list--inline']]: inline,
        })}
      >
        {routes.map((route) => {
          const { name, path } = route;

          return (
            <li key={path}>
              <NavLink to={path} activeClassName="is-active" exact>
                {t(name)}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
