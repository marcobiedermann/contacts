import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as routes from '../../constants/routes';
import ContactsPage from '../../containers/ContactsPage';
import LoginPage from '../../containers/LoginPage';
import LogoutPage from '../../containers/LogoutPage';
import ContactNewPage from '../../pages/ContactNewPage';
import IndexPage from '../../pages/IndexPage';
import RegisterPage from '../../pages/RegisterPage';
import history from '../../store/history';
import Layout from '../Layout';

const Router = () => (
  <ConnectedRouter history={history}>
    <Layout>
      <Switch>
        <Route path={routes.CONTACTS} component={ContactsPage} />
        <Route path={routes.LOGIN} component={LoginPage} />
        <Route path={routes.NEW} component={ContactNewPage} />
        <Route path={routes.REGISTER} component={RegisterPage} />
        <Route path={routes.LOGOUT} component={LogoutPage} />
        <Route path={routes.INDEX} component={IndexPage} />
      </Switch>
    </Layout>
  </ConnectedRouter>
);

export default Router;
