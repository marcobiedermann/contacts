import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactDetail from '../../components/ContactDetail';
import EditPage from '../ContactEditPage';

const ContactPage = (props) => {
  const { contact } = props;

  return (
    <Switch>
      <Route path="/contacts/:id/edit" component={() => <EditPage contact={contact} />} />
      <Route path="/contacts/:id" component={() => <ContactDetail {...contact} />} />
    </Switch>
  );
};

ContactPage.propTypes = {
  contact: PropTypes.shape(),
};

ContactPage.defaultProps = {
  contact: null,
};

export default ContactPage;
