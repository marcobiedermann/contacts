import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EditPage from './Edit';
import ContactDetail from '../../../components/ContactDetail';

const ContactPage = ({ contacts, match }) => {
  const contact = contacts.find(c => c.id === match.params.id);

  return (
    <Switch>
      <Route
        path="/contacts/:id/edit"
        component={() => <EditPage contact={contact} />}
      />
      <Route
        path="/contacts/:id"
        component={() => (
          <ContactDetail {...contact} />
        )}
      />
    </Switch>
  );
};

ContactPage.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
  match: PropTypes.shape(),
};

ContactPage.defaultProps = {
  contacts: [],
  match: null,
};

export default ContactPage;
