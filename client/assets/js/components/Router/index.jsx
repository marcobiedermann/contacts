import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../Layout';
import IndexPage from '../../pages/Index';
import ContactsPage from '../../pages/Contacts';
import NewPage from '../../pages/New';

const Router = ({
  contacts,
  addContact,
  removeContact,
}) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route
          path="/contacts"
          component={() => (
            <ContactsPage
              contacts={contacts}
              removeContact={removeContact}
            />
          )}
        />
        <Route
          path="/new"
          component={() => (
            <NewPage addContact={addContact} />
          )}
        />
        <Route
          path="/"
          component={IndexPage}
        />
      </Switch>
    </Layout>
  </BrowserRouter>
);

Router.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
  addContact: PropTypes.func,
  removeContact: PropTypes.func,
};

Router.defaultProps = {
  contacts: [],
  addContact: () => {},
  removeContact: () => {},
};

export default Router;
