import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactPage from './Contact';
import Contacts from '../../components/Contacts';
import contacts from '../../data/contacts';

const ContactsPage = () => (
  <div>
    <Switch>
      <Route
        path="/contacts/:id"
        component={ContactPage}
      />
      <Route
        path="/contacts"
        component={() => (
          <Contacts contacts={contacts} />
        )}
      />
    </Switch>
  </div>
);

export default ContactsPage;
