import firebase from 'firebase';
import React, { FC } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { useAuth } from 'reactfire';

function signOut(auth: firebase.auth.Auth): Promise<void> {
  return auth.signOut();
}

const LogoutPage: FC<RouteComponentProps> = () => {
  const auth = useAuth();

  signOut(auth);

  return <Redirect to="/" />;
};

export default LogoutPage;
