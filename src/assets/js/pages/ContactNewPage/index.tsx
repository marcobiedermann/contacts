import { FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { useFirestore } from 'reactfire';
import ContactNew, { Values } from '../../components/ContactNew';

const ContactNewPage: FC = () => {
  const firestore = useFirestore();
  const contactsCollection = firestore.collection('contacts');

  const initialValues: Values = {
    address: {
      city: '',
      country: '',
      streetAddress: '',
      zipCode: '',
    },
    email: '',
    name: {
      firstName: '',
      lastName: '',
    },
    phone: '',
  };

  function onSubmit(values: Values, formikHelpers: FormikHelpers<Values>): void {
    const { setSubmitting } = formikHelpers;

    contactsCollection.add(values);

    setSubmitting(false);
  }

  return (
    <div>
      <ContactNew initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  );
};

export default ContactNewPage;
