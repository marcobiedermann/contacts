import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useFirestore, useFirestoreDocDataOnce } from 'reactfire';
import ContactDetail from '../../components/ContactDetail';
import Loader from '../../components/Loader';

interface Params {
  contactId: string;
}

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

const ContactPage: FC<RouteComponentProps<Params>> = (props) => {
  const {
    match: {
      params: { contactId },
    },
  } = props;
  const firestore = useFirestore();
  const ref = firestore.doc(`contacts/${contactId}`);
  const { status, data } = useFirestoreDocDataOnce<Document>(ref, {
    idField: 'id',
  });

  if (status === 'loading') {
    return <Loader />;
  }

  return <ContactDetail {...data} />;
};

export default ContactPage;
