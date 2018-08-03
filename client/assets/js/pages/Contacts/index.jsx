import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactPage from './Contact';
import Contacts from '../../components/Contacts';

const ContactsPage = ({ contacts, removeContact }) => (
  <div>
    <Switch>
      <Route
        path="/contacts/:id"
        component={props => (
          <ContactPage
            contacts={contacts}
            removeContact={removeContact}
            {...props}
          />
        )}
      />
      <Route
        path="/contacts"
        component={() => <Contacts contacts={contacts} />}
      />
    </Switch>
  </div>
);

ContactsPage.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
  removeContact: PropTypes.func,
};

ContactsPage.defaultProps = {
  contacts: [],
  removeContact: () => {},
};

export default ContactsPage;
