import React, { FC } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { RouteComponentProps } from 'react-router-dom';
import { useAuth } from 'reactfire';

const LoginPage: FC<RouteComponentProps> = () => {
  const auth = useAuth;
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [auth.GithubAuthProvider.PROVIDER_ID, auth.TwitterAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
    </div>
  );
};

export default LoginPage;
