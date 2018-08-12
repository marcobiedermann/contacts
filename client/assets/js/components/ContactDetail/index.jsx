import PropTypes from 'prop-types';
import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';

const ContactDetail = ({
  t, address, email, id, name, phone,
}) => (
  <div className="contact">
    <header>
      <Link to={`/contacts/${id}/edit`}>
        {t('edit')}
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
  </div>
);

ContactDetail.propTypes = {
  address: PropTypes.shape(),
  email: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.shape(),
  phone: PropTypes.string,
  t: PropTypes.func,
};

ContactDetail.defaultProps = {
  address: null,
  email: '',
  name: null,
  phone: '',
  t: () => {},
};

export default translate('common')(ContactDetail);
