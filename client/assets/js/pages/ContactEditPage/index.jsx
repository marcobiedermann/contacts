import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeContact, updateContact } from '../../actions/contacts';
import ContactEdit from '../../components/ContactEdit';

const ContactEditPage = ({
  contact,
  removeContact,
  updateContact,
}) => (
  <ContactEdit
    {...contact}
    removeContact={removeContact}
    updateContact={updateContact}
  />
);

ContactEditPage.propTypes = {
  contact: PropTypes.shape(),
  removeContact: PropTypes.func,
  updateContact: PropTypes.func,
};

ContactEditPage.defaultProps = {
  contact: null,
  removeContact: () => {},
  updateContact: () => {},
};

const mapDispatchToProps = dispatch => bindActionCreators({
  removeContact,
  updateContact,
}, dispatch);

export default connect(null, mapDispatchToProps)(ContactEditPage);
