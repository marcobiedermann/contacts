import React, { FC } from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import Contacts from '../../components/Contacts';
import Loader from '../../components/Loader';
import styles from './style.module.css';

const ContactsPage: FC = () => {
  const firestore = useFirestore();
  const ref = firestore.collection('contacts');
  const { data, status } = useFirestoreCollectionData<any>(ref, {
    idField: 'id',
  });

  if (status === 'loading') {
    return <Loader />;
  }

  console.log({ data });

  return (
    <div className={styles['contacts-page']}>
      <Contacts contacts={data} />
    </div>
  );
};

export default ContactsPage;
