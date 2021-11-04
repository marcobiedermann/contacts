import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'reactfire';

function LoginPage(): JSX.Element {
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
}

export default LoginPage;
