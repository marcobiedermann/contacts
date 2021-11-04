import React from 'react';
import ContactPreview, { ContactPreviewProps } from '../ContactPreview';
import styles from './style.module.css';

export interface ContactsProps {
  contacts: ContactPreviewProps[];
}

function Contacts(props: ContactsProps): JSX.Element {
  const { contacts } = props;

  return (
    <div>
      <ul className={styles.contacts__list}>
        {contacts.map((contact) => (
          <li className={styles.contacts__item} key={contact.id}>
            <ContactPreview {...contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
