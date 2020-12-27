import React, { FC } from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import Contacts from '../../components/Contacts';
import Loader from '../../components/Loader';
import styles from './style.module.css';

interface Address {
  city: string;
  country: string;
  streetAddress: string;
  zipCode: string;
}

interface Name {
  firstName: string;
  lastName: string;
}

interface Document {
  address: Address;
  email: string;
  id: string;
  name: Name;
  phone: string;
}

const ContactsPage: FC = () => {
  const firestore = useFirestore();
  const ref = firestore.collection('contacts');
  const { data, status } = useFirestoreCollectionData<Document>(ref, {
    idField: 'id',
  });

  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <div className={styles['contacts-page']}>
      <Contacts contacts={data} />
    </div>
  );
};

export default ContactsPage;
