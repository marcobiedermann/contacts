import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout';
import IndexPage from '../../pages/Index';
import ContactsPage from '../../pages/Contacts';
import LoginPage from '../../pages/Login';
import NewPage from '../../pages/New';
import history from '../../store/history';

const Router = () => (
  <ConnectedRouter history={history}>
    <Layout>
      <Switch>
        <Route
          path="/contacts"
          component={ContactsPage}
        />
        <Route
          path="/login"
          component={LoginPage}
        />
        <Route
          path="/new"
          component={NewPage}
        />
        <Route
          path="/"
          component={IndexPage}
        />
      </Switch>
    </Layout>
  </ConnectedRouter>
);

export default Router;
