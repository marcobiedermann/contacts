import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Contacts from '../../components/Contacts';
import ContactPage from '../ContactPage';
import styles from './style.css';

const ContactsPage = props => {
  const { contacts } = props;

  return (
    <div className={styles['contacts-page']}>
      <Route path="/contacts" component={() => <Contacts contacts={contacts} />} />
      <Route
        path="/contacts/:id"
        component={props => <ContactPage contacts={contacts} {...props} />}
      />
    </div>
  );
};

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
