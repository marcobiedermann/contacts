import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import { useFirestore, useFirestoreDocDataOnce } from 'reactfire';
import ContactDetail from '../../components/ContactDetail';
import Loader from '../../components/Loader';

interface Params {
  contactId: string;
}

interface Address {
  type: string;
  value: {
    city: string;
    country: string;
    street: string;
    zip: string;
  };
}

interface Email {
  type: string;
  value: string;
}

interface Name {
  firstName: string;
  lastName: string;
}

interface Phone {
  type: string;
  value: string;
}

interface Document {
  addresses: Address[];
  emails: Email[];
  id: string;
  name: Name;
  phones: Phone[];
}

export type ContactPageProp = RouteComponentProps<Params>;

function ContactPage(props: ContactPageProp): JSX.Element {
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
  const { t } = useTranslation();

  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>{t('pages:contact')}</title>
      </Helmet>
      <ContactDetail {...data} />
    </>
  );
}

export default ContactPage;
