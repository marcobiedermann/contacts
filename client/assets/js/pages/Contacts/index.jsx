import React from 'react';
import uuidv4 from 'uuid/v4';
import Contacts from '../../components/Contacts';

const contacts = [
  {
    id: uuidv4(),
  },
  {
    id: uuidv4(),
  },
  {
    id: uuidv4(),
  },
];

const ContactsPage = () => (
  <div>
    <Contacts contacts={contacts} />
  </div>
);

export default ContactsPage;
