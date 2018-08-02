import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactPage from './Contact';
import Contacts from '../../components/Contacts';
import contacts from '../../data/contacts';

const ContactsPage = ({ match }) => (
  <div>
    <Switch>
      <Route
        path={`${match.url}/:id`}
        component={ContactPage}
      />
      <Route
        path={match.url}
        component={() => (
          <Contacts contacts={contacts} />
        )}
      />
    </Switch>
  </div>
);

ContactsPage.propTypes = {
  match: PropTypes.shape(),
};

ContactsPage.defaultProps = {
  match: null,
};

export default ContactsPage;
