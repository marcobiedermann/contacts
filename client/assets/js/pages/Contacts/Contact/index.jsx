import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EditPage from './Edit';
import ContactDetail from '../../../components/ContactDetail';

const ContactPage = ({
  contacts,
  match,
  updateContact,
  removeContact,
}) => {
  const contact = contacts.find(c => c.id === match.params.id);

  return (
    <Switch>
      <Route
        path="/contacts/:id/edit"
        component={() => (
          <EditPage
            contact={contact}
            updateContact={updateContact}
          />
        )}
      />
      <Route
        path="/contacts/:id"
        component={() => (
          <ContactDetail
            {...contact}
            removeContact={removeContact}
          />
        )}
      />
    </Switch>
  );
};

ContactPage.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
  match: PropTypes.shape(),
  updateContact: PropTypes.func,
  removeContact: PropTypes.func,
};

ContactPage.defaultProps = {
  contacts: [],
  match: null,
  updateContact: () => {},
  removeContact: () => {},
};

export default ContactPage;
