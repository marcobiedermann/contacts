import { FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useFirestore, useFirestoreDocDataOnce } from 'reactfire';
import ContactEdit, { Values } from '../../components/ContactEdit';
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

  const initialValues: Values = data;

  function onSubmit(values: Values, formikHelpers: FormikHelpers<Values>): void {
    const { setSubmitting } = formikHelpers;

    ref.update(values);

    setSubmitting(false);
  }

  if (status === 'loading') {
    return <Loader />;
  }

  return <ContactEdit initialValues={initialValues} onSubmit={onSubmit} />;
};

export default ContactEditPage;
