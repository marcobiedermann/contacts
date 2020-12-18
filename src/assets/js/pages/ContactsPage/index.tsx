import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import Contacts from '../../components/Contacts';
import ContactPage from '../../containers/ContactPage';
import styles from './style.module.css';

const ContactsPage: FC = (props) => {
  const { contacts } = props;

  return (
    <div className={styles['contacts-page']}>
      <Route path="/contacts/:id" render={(props) => <ContactPage {...props} contactId={props.match.params.id} />} />
      <Route path="/contacts" component={() => <Contacts contacts={contacts} />} />
    </div>
  );
};

export default ContactsPage;
