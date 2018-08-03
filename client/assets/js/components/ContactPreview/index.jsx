import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const ContactPreview = ({
  id,
  name,
}) => (
  <div className="contact">
    <h1>
      <Link to={`/contacts/${id}`}>
        {name.firstName}
        {' '}
        {name.lastName}
      </Link>
    </h1>
  </div>
);

ContactPreview.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.shape(),
};

ContactPreview.defaultProps = {
  name: null,
};

export default ContactPreview;
