import React, { FC } from 'react';
import ContactPreview, { ContactPreviewProps } from '../ContactPreview';
import styles from './style.css';

export interface ContactsProps {
  contacts: ContactPreviewProps[];
}

const Contacts: FC<ContactsProps> = (props) => {
  const { contacts } = props;

  return (
    <div className={styles.contacts}>
      <ul className={styles.contacts__list}>
        {contacts.map((contact) => (
          <li className={styles.contacts__item} key={contact.id}>
            <ContactPreview {...contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
