import { FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import { useFirestore } from 'reactfire';
import ContactNew, { Values } from '../../components/ContactNew';

const ContactNewPage: FC<RouteComponentProps> = () => {
  const firestore = useFirestore();
  const contactsCollection = firestore.collection('contacts');
  const { t } = useTranslation();

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
      <Helmet>
        <title>{t('pages:new')}</title>
      </Helmet>
      <ContactNew initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  );
};

export default ContactNewPage;
