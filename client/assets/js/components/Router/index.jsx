import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../Layout';
import IndexPage from '../../pages/Index';
import ContactsPage from '../../pages/Contacts';
import NewPage from '../../pages/New';

const Router = ({ contacts, removeContact }) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/contacts" component={() => <ContactsPage contacts={contacts} removeContact={removeContact} />} />
        <Route path="/new" component={NewPage} />
        <Route path="/" component={IndexPage} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

Router.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
  removeContact: PropTypes.func,
};

Router.defaultProps = {
  contacts: [],
  removeContact: () => {},
};

export default Router;
