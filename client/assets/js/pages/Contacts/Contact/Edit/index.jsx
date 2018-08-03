import PropTypes from 'prop-types';
import React from 'react';
import contacts from '../../../../data/contacts';

const EditPage = ({ match }) => {
  const contact = contacts.find(c => c.id === match.params.id);

  return (
    <div>
      EditPage
    </div>
  );
};

EditPage.propTypes = {
  match: PropTypes.shape(),
};

EditPage.defaultProps = {
  match: null,
};

export default EditPage;
