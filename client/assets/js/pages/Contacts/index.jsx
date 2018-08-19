import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ContactPage from './Contact';
import Contacts from '../../components/Contacts';
import styles from './style.css';

const ContactsPage = ({
  contacts,
}) => (
  <div className={styles['contacts-page']}>
    <Route
      path="/contacts"
      component={() => <Contacts contacts={contacts} />}
    />
    <Route
      path="/contacts/:id"
      component={props => (
        <ContactPage
          contacts={contacts}
          {...props}
        />
      )}
    />
  </div>
);

ContactsPage.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
};

ContactsPage.defaultProps = {
  contacts: [],
};

const mapStateToProps = state => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(ContactsPage);
