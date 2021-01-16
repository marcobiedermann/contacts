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
    addresses: [
      {
        type: '',
        value: {
          city: '',
          country: '',
          street: '',
          zip: '',
        },
      },
    ],
    emails: [
      {
        type: '',
        value: '',
      },
    ],
    name: {
      firstName: '',
      lastName: '',
    },
    phones: [
      {
        type: '',
        value: '',
      },
    ],
  };

  function onSubmit(values: Values, formikHelpers: FormikHelpers<Values>): void {
    const { setSubmitting } = formikHelpers;

    contactsCollection.add(values);

    setSubmitting(false);
  }

  return (
    <>
      <Helmet>
        <title>{t('pages:new')}</title>
      </Helmet>
      <ContactNew initialValues={initialValues} onSubmit={onSubmit} />
    </>
  );
};

export default ContactNewPage;
