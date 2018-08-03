import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EditPage from './Edit';
import ContactDetail from '../../../components/ContactDetail';
import contacts from '../../../data/contacts';

const ContactPage = ({ match }) => {
  const contact = contacts.find(c => c.id === match.params.id);

  return (
    <Switch>
      <Route
        path="/contacts/:id/edit"
        component={EditPage}
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
  match: PropTypes.shape(),
};

ContactPage.defaultProps = {
  match: null,
};

export default ContactPage;
