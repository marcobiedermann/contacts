import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

export interface ContactDetailProps {
  address?: {
    city: string;
    country: string;
    streetAddress: string;
    zipCode: string;
  };
  email?: string;
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  phone?: string;
}

const ContactDetail: FC<ContactDetailProps> = (props) => {
  const { address, email, id, name, phone } = props;
  const { t } = useTranslation();

  return (
    <div>
      <header>
        <Link to={`/contacts/${id}/edit`}>{t('common:edit')}</Link>
      </header>
      {name && (
        <h1>
          {name.firstName} {name.lastName}
        </h1>
      )}
      <ul className={styles.details}>
        {phone && (
          <li>
            <a href={`tel:${phone}`}>{phone}</a>
          </li>
        )}
        {email && (
          <li>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
        )}
        {address && (
          <li>
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
          </li>
        )}
      </ul>
    </div>
  );
};

export default ContactDetail;
