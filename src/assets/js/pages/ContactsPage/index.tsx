import React, { FC } from 'react';
import { useFirestore, useFirestoreDocDataOnce } from 'reactfire';
import Contacts from '../../components/Contacts';
import Loader from '../../components/Loader';
import styles from './style.module.css';

const ContactsPage: FC = () => {
  const firestore = useFirestore();
  const ref = firestore.doc('contacts');
  const { status, data } = useFirestoreDocDataOnce<any>(ref);

  if (status === 'loading') {
    return <Loader />;
  }

  console.log({ data });

  return (
    <div className={styles['contacts-page']}>
      <Contacts {...data} />
    </div>
  );
};

export default ContactsPage;
