import { FormikHelpers } from 'formik';
import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useFirestore } from 'reactfire';
import ContactNew, { Values } from '../../components/ContactNew';
import validationSchema from '../../utils/validation';

function ContactNewPage(): JSX.Element {
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

  const onSubmit = useCallback((values: Values, formikHelpers: FormikHelpers<Values>) => {
    const { setSubmitting } = formikHelpers;

    contactsCollection.add(values);

    setSubmitting(false);
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('pages:new')}</title>
      </Helmet>
      <ContactNew initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} />
    </>
  );
};

export default ContactNewPage;
