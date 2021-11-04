import React, { lazy } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import Contacts from '../../components/Contacts';
import Loader from '../../components/Loader';
import styles from './style.module.css';

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

function ContactsPage(): JSX.Element {
  const firestore = useFirestore();
  const ref = firestore.collection('contacts');
  const { data, status } = useFirestoreCollectionData<Document>(ref, {
    idField: 'id',
  });
  const { t } = useTranslation();

  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <div className={styles['contacts-page']}>
      <Helmet>
        <title>{t('pages:contacts')}</title>
      </Helmet>
      <Contacts contacts={data} />
      <Switch>
        <Route path="/contacts/:contactId/edit" component={lazy(() => import('../ContactEdit'))} />
        <Route path="/contacts/new" component={lazy(() => import('../ContactNew'))} />
        <Route path="/contacts/:contactId" component={lazy(() => import('../Contact'))} />
      </Switch>
    </div>
  );
}

export default ContactsPage;
