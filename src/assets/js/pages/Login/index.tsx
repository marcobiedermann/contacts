import React, { FC } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import { useAuth } from 'reactfire';

const LoginPage: FC<RouteComponentProps> = () => {
  const auth = useAuth;
  const { t } = useTranslation();
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [auth.GithubAuthProvider.PROVIDER_ID, auth.TwitterAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  return (
    <>
      <Helmet>
        <title>{t('pages:login')}</title>
      </Helmet>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
    </>
  );
};

export default LoginPage;
