import PropTypes from 'prop-types';
import React from 'react';
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

export default EditPage;
