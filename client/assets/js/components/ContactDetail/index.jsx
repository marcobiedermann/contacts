import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

const ContactDetail = props => {
  const { address, email, id, name, phone } = props;
  const { t } = useTranslation();

  return (
    <div>
      <header>
        <Link to={`${routes.CONTACTS}/${id}/edit`}>{t('common:edit')}</Link>
      </header>
      <h1>
        {name.firstName} {name.lastName}
      </h1>
      <address>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(address.streetAddress)} ${address.zipCode} ${
            address.city
          } ${address.country}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {address.streetAddress}
          <br />
          {address.zipCode} {address.city}
          <br />
          {address.country}
        </a>
      </address>
      <ul>
        <li>
          <a href={`mailto:${email}`}>{email}</a>
        </li>
        <li>{phone}</li>
      </ul>
    </div>
  );
};

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
