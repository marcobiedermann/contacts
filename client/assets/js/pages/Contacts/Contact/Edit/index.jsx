import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateContact } from '../../../../actions/contacts';
import ContactEdit from '../../../../components/ContactEdit';

const EditPage = ({
  contact,
  updateContact,
}) => (
  <ContactEdit
    {...contact}
    updateContact={updateContact}
  />
);

EditPage.propTypes = {
  contact: PropTypes.shape(),
  updateContact: PropTypes.func,
};

EditPage.defaultProps = {
  contact: null,
  updateContact: () => {},
};

const mapDispatchToProps = dispatch => bindActionCreators({
  updateContact,
}, dispatch);

export default connect(null, mapDispatchToProps)(EditPage);
