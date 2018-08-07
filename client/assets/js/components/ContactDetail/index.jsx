import PropTypes from 'prop-types';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ContactDetail = withRouter(({
  history,
  address,
  email,
  id,
  name,
  phone,
  removeContact,
}) => {
  const onClick = () => {
    removeContact(id);
    history.push('/contacts');
  };

  return (
    <div className="contact">
      <header>
        <Link to={`/contacts/${id}/edit`}>
          Edit
        </Link>
      </header>
      <h1>
        {name.firstName}
        {' '}
        {name.lastName}
      </h1>
      <address>
        <a
          href={`https://maps.google.com/?q=${address.streetAddress} ${
            address.zipCode
          } ${address.city} ${address.country}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {address.streetAddress}
          <br />
          {address.zipCode}
          {' '}
          {address.city}
          <br />
          {address.country}
        </a>
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
      <ul>
        <li>
          <button type="button" onClick={onClick}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
});

ContactDetail.propTypes = {
  address: PropTypes.shape(),
  email: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.shape(),
  phone: PropTypes.string,
};

ContactDetail.defaultProps = {
  address: null,
  email: '',
  name: null,
  phone: '',
};

export default ContactDetail;
