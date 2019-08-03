import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import Contacts from '../../components/Contacts';
import ContactPage from '../../containers/ContactPage';
import styles from './style.css';

const ContactsPage = props => {
  const { contacts } = props;

  return (
    <div className={styles['contacts-page']}>
      <Route path="/contacts/:id" render={props => <ContactPage {...props} contactId={props.match.params.id} />} />
      <Route path="/contacts" component={() => <Contacts contacts={contacts} />} />
    </div>
  );
};

ContactsPage.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

ContactsPage.defaultProps = {
  contacts: [],
  match: null,
};

export default ContactsPage;
