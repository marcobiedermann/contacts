import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = ({ id }) => (
  <div className="contact">
    <Link to={`/contacts/${id}`}>
      Contact
    </Link>
  </div>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Contact;
