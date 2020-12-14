import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';

const LogoutPage: FC = (props) => {
  const { firebase } = props;

  firebase.logout();

  return <Redirect to="/" />;
};

export default LogoutPage;
