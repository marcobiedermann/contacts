import PropTypes from 'prop-types';
import React from 'react';
import ContactPreview from '../ContactPreview';
import './style.css';

const Contacts = ({ contacts }) => (
  <div className="contacts">
    <ul className="contacts__list">
      {contacts.map(contact => (
        <li className="contacts__item" key={contact.id}>
          <ContactPreview {...contact} />
        </li>
      ))}
    </ul>
  </div>
);

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
