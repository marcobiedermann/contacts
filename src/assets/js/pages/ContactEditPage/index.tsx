import { FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { useFirestore, useFirestoreDocDataOnce } from 'reactfire';
import ContactEdit, { Values } from '../../components/ContactEdit';
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

const ContactEditPage: FC = () => {
  const { contactId } = useParams<Params>();
  const firestore = useFirestore();
  const ref = firestore.doc(`contacts/${contactId}`);
  const { status, data } = useFirestoreDocDataOnce<Document>(ref, {
    idField: 'id',
  });
  const { t } = useTranslation();

  const initialValues: Values = data;

  function onSubmit(values: Values, formikHelpers: FormikHelpers<Values>): void {
    const { setSubmitting } = formikHelpers;

    ref.update(values);

    setSubmitting(false);
  }

  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <div>
      <header>
        <Link to={`/contacts/${contactId}`}>{t('common:cancel')}</Link>
      </header>
      <ContactEdit initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  );
};

export default ContactEditPage;
