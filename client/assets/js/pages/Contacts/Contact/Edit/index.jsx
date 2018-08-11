import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  removeContact,
  updateContact,
} from '../../../../actions/contacts';
import ContactEdit from '../../../../components/ContactEdit';

const EditPage = ({
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

EditPage.propTypes = {
  contact: PropTypes.shape(),
  removeContact: PropTypes.func,
  updateContact: PropTypes.func,
};

EditPage.defaultProps = {
  contact: null,
  removeContact: () => {},
  updateContact: () => {},
};

const mapDispatchToProps = dispatch => bindActionCreators({
  removeContact,
  updateContact,
}, dispatch);

export default connect(null, mapDispatchToProps)(EditPage);
