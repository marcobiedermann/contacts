import PropTypes from 'prop-types';
import React from 'react';
import ContactNew from '../../components/ContactNew';

const NewPage = ({ addContact }) => (
  <div>
    <ContactNew addContact={addContact} />
  </div>
);

NewPage.propTypes = {
  addContact: PropTypes.func,
};

NewPage.defaultProps = {
  addContact: () => {},
};

export default NewPage;
