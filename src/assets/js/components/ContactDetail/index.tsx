import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Address, { AddressProps } from '../Address';
import Email, { EmailProps } from '../Email';
import Phone, { PhoneProps } from '../Phone';
import styles from './style.module.css';

export interface ContactDetailProps {
  addresses: AddressProps[];
  emails: EmailProps[];
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  phones: PhoneProps[];
}

function ContactDetail(props: ContactDetailProps): JSX.Element {
  const { addresses, emails, id, name, phones } = props;
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
        {phones.length && (
          <li>
            <ul>
              {phones.map((phone) => (
                <li key={phone.value}>
                  <Phone {...phone} />
                </li>
              ))}
            </ul>
          </li>
        )}
        {emails.length && (
          <li>
            <ul>
              {emails.map((email) => (
                <li key={email.value}>
                  <Email {...email} />
                </li>
              ))}
            </ul>
          </li>
        )}
        {addresses.length && (
          <li>
            <ul>
              {addresses.map((address) => (
                <li key={address.value.toString()}>
                  <Address {...address} />
                </li>
              ))}
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
}

export default ContactDetail;
