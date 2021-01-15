import React, { FC, lazy } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import Contacts from '../../components/Contacts';
import Loader from '../../components/Loader';
import styles from './style.module.css';

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

const ContactsPage: FC<RouteComponentProps> = () => {
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
};

export default ContactsPage;
