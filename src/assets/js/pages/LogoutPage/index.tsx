import firebase from 'firebase';
import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from 'reactfire';

function signOut(auth: firebase.auth.Auth): void {
  auth.signOut();
}

const LogoutPage: FC = () => {
  const auth = useAuth();

  signOut(auth);

  return <Redirect to="/" />;
};

export default LogoutPage;
