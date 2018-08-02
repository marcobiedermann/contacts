import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = ({
  address,
  email,
  id,
  name,
  phone,
}) => (
  <div className="contact">
    <h1>
      <Link to={`/contacts/${id}`}>
        {name.firstName}
        {' '}
        {name.lastName}
      </Link>
    </h1>
    <address>
      {address.streetAddress}
      <br />
      {address.zipCode}
      {' '}
      {address.city}
      <br />
      {address.country}
    </address>
    <ul>
      <li>
        <a href={`mailto:${email}`}>
          {email}
        </a>
      </li>
      <li>
        {phone}
      </li>
    </ul>
  </div>
);

Contact.propTypes = {
  address: PropTypes.shape(),
  email: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.shape(),
  phone: PropTypes.string,
};

Contact.defaultProps = {
  address: null,
  email: '',
  name: null,
  phone: '',
};

export default Contact;
