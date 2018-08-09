import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout';
import IndexPage from '../../pages/Index';
import ContactsPage from '../../pages/Contacts';
import NewPage from '../../pages/New';
import history from '../../store/history';

const Router = ({
  addContact,
  updateContact,
  removeContact,
}) => (
  <ConnectedRouter history={history}>
    <Layout>
      <Switch>
        <Route
          path="/contacts"
          component={() => (
            <ContactsPage
              updateContact={updateContact}
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
  </ConnectedRouter>
);

Router.propTypes = {
  addContact: PropTypes.func,
  updateContact: PropTypes.func,
  removeContact: PropTypes.func,
};

Router.defaultProps = {
  addContact: () => {},
  updateContact: () => {},
  removeContact: () => {},
};

export default Router;
