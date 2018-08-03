import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactPage from './Contact';
import Contacts from '../../components/Contacts';

const ContactsPage = ({ contacts }) => (
  <div>
    <Switch>
      <Route
        path="/contacts/:id"
        component={props => <ContactPage contacts={contacts} {...props} />}
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

ContactsPage.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
};

ContactsPage.defaultProps = {
  contacts: [],
};


export default ContactsPage;
