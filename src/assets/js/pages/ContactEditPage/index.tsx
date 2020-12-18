import React, { FC } from 'react';
import ContactEdit from '../../components/ContactEdit';

const ContactEditPage: FC = (props) => {
  return <ContactEdit {...contact} removeContact={removeContact} updateContact={updateContact} />;
};

export default ContactEditPage;
