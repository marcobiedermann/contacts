import PropTypes from 'prop-types';
import React from 'react';
import ContactPreview from '../ContactPreview';
import styles from './style.css';

const Contacts = props => {
  const { contacts } = props;

  return (
    <div className={styles.contacts}>
      <ul className={styles.contacts__list}>
        {contacts.map(contact => (
          <li className={styles.contacts__item} key={contact.id}>
            <ContactPreview {...contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

Contacts.defaultProps = {
  contacts: [],
};

export default Contacts;
