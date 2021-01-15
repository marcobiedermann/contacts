import firebase from 'firebase';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { useAuth } from 'reactfire';

function signOut(auth: firebase.auth.Auth): Promise<void> {
  return auth.signOut();
}

const LogoutPage: FC<RouteComponentProps> = () => {
  const auth = useAuth();
  const { t } = useTranslation();

  signOut(auth);

  return (
    <>
      <Helmet>
        <title>{t('pages:logout')}</title>
      </Helmet>
      <Redirect to="/" />;
    </>
  );
};

export default LogoutPage;
