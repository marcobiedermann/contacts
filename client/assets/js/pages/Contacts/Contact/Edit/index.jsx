import PropTypes from 'prop-types';
import React from 'react';
import ContactEdit from '../../../../components/ContactEdit';

const EditPage = ({ contact }) => (
  <ContactEdit {...contact} />
);

EditPage.propTypes = {
  contact: PropTypes.shape(),
};

EditPage.defaultProps = {
  contact: null,
};

export default EditPage;
