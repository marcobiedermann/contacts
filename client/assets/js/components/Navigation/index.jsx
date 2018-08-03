import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/" activeClassName="is-active" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/contacts" activeClassName="is-active" exact>
          Contacts
        </NavLink>
      </li>
      <li>
        <NavLink to="/new" activeClassName="is-active" exact>
          New
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
