import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactDetail from '../../components/ContactDetail';
import EditPage from '../ContactEditPage';

const ContactPage = props => {
  const { contacts, match } = props;
  const contact = contacts.find(c => c.id === match.params.id);

  return (
    <Switch>
      <Route path="/contacts/:id/edit" component={() => <EditPage contact={contact} />} />
      <Route path="/contacts/:id" component={() => <ContactDetail {...contact} />} />
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
