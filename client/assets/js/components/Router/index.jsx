import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as routes from '../../constants/routes';
import ContactNewPage from '../../pages/ContactNewPage';
import ContactsPage from '../../pages/ContactsPage';
import IndexPage from '../../pages/IndexPage';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import history from '../../store/history';
import Layout from '../Layout';

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
          component={ContactNewPage}
        />
        <Route
          path={routes.REGISTER}
          component={RegisterPage}
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
