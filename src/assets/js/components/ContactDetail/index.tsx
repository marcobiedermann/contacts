import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Address from '../Address';
import Email from '../Email';
import Phone from '../Phone';
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
            <Phone value={phone} />
          </li>
        )}
        {email && (
          <li>
            <Email value={email} />
          </li>
        )}
        {address && (
          <li>
            <Address value={address} />
          </li>
        )}
      </ul>
    </div>
  );
};

export default ContactDetail;
