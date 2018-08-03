import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../Layout';
import IndexPage from '../../pages/Index';
import ContactsPage from '../../pages/Contacts';
import NewPage from '../../pages/New';

const Router = ({ contacts }) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/contacts" component={() => <ContactsPage contacts={contacts} />} />
        <Route path="/new" component={NewPage} />
        <Route path="/" component={IndexPage} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
