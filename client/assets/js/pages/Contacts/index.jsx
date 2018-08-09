import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ContactPage from './Contact';
import Contacts from '../../components/Contacts';
import './style.css';

const ContactsPage = ({
  contacts,
  updateContact,
  removeContact,
}) => (
  <div className="contacts-page">
    <Route
      path="/contacts"
      component={() => <Contacts contacts={contacts} />}
    />
    <Route
      path="/contacts/:id"
      component={props => (
        <ContactPage
          contacts={contacts}
          updateContact={updateContact}
          removeContact={removeContact}
          {...props}
        />
      )}
    />
  </div>
);

ContactsPage.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
  updateContact: PropTypes.func,
  removeContact: PropTypes.func,
};

ContactsPage.defaultProps = {
  contacts: [],
  updateContact: () => {},
  removeContact: () => {},
};

const mapStateToProps = state => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(ContactsPage);
