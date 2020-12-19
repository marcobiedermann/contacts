import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useFirestore, useFirestoreDocDataOnce } from 'reactfire';
import ContactEdit from '../../components/ContactEdit';
import Loader from '../../components/Loader';

interface Params {
  contactId: string;
}

const ContactEditPage: FC = () => {
  const { contactId } = useParams<Params>();
  const firestore = useFirestore();
  const ref = firestore.doc(`contacts/${contactId}`);
  const { status, data } = useFirestoreDocDataOnce<any>(ref, {
    idField: 'id',
  });

  if (status === 'loading') {
    return <Loader />;
  }

  console.log({ data });

  return <ContactEdit {...data} />;
};

export default ContactEditPage;
