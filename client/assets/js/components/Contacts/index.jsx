import PropTypes from 'prop-types';
import React from 'react';
import Contact from '../Contact';

const Contacts = ({ contacts }) => (
  <div className="contacts">
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact {...contact} />
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
