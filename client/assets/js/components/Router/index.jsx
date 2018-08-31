import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout';
import * as routes from '../../constants/routes';
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
          path={routes.CONTACTS}
          component={ContactsPage}
        />
        <Route
          path={routes.LOGIN}
          component={LoginPage}
        />
        <Route
          path={routes.NEW}
          component={NewPage}
        />
        <Route
          path={routes.INDEX}
          component={IndexPage}
        />
      </Switch>
    </Layout>
  </ConnectedRouter>
);

export default Router;
