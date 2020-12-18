import React, { FC } from 'react';
import { addContact } from '../../actions/contacts';
import ContactNew from '../../components/ContactNew';

const ContactNewPage: FC = () => {
  return (
    <div>
      <ContactNew addContact={addContact} />
    </div>
  );
};

export default ContactNewPage;
