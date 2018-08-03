import PropTypes from 'prop-types';
import React from 'react';
import contacts from '../../../../data/contacts';
import ContactEdit from '../../../../components/ContactEdit';

const EditPage = ({ match }) => {
  const contact = contacts.find(c => c.id === match.params.id);

  return (
    <ContactEdit {...contact} />
  );
};

EditPage.propTypes = {
  match: PropTypes.shape(),
};

EditPage.defaultProps = {
  match: null,
};

export default EditPage;
