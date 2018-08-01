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

export default Contacts;
