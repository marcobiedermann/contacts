import PropTypes from 'prop-types';
import React from 'react';
import Contact from '../../../components/Contact';
import contacts from '../../../data/contacts';

const ContactPage = ({ match }) => {
  const contact = contacts.find(c => c.id === match.params.id);

  return (
    <div>
      <Contact {...contact} />
    </div>
  );
};

ContactPage.propTypes = {
  match: PropTypes.shape(),
};

ContactPage.defaultProps = {
  match: null,
};

export default ContactPage;
