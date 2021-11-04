import { FormikHelpers } from 'formik';
import React, { FC, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useFirestore, useFirestoreDocDataOnce } from 'reactfire';
import ContactEdit, { Values } from '../../components/ContactEdit';
import Loader from '../../components/Loader';
import validationSchema from '../../utils/validation';

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

const ContactEditPage: FC<RouteComponentProps<Params>> = (props) => {
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

  const initialValues: Values = data;

  const onSubmit = useCallback((values: Values, formikHelpers: FormikHelpers<Values>) => {
    const { setSubmitting } = formikHelpers;

    ref.update(values);

    setSubmitting(false);
  }, []);

  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>{t('pages:edit')}</title>
      </Helmet>
      <header>
        <Link to={`/contacts/${contactId}`}>{t('common:cancel')}</Link>
      </header>
      <ContactEdit initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} />
    </>
  );
};

export default ContactEditPage;
