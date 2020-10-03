import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

const LogoutPage = (props) => {
  const { firebase } = props;

  firebase.logout();

  return <Redirect to="/" />;
};

LogoutPage.propTypes = {
  firebase: PropTypes.shape({
    logout: PropTypes.func,
  }),
};

LogoutPage.defaultProps = {
  firebase: null,
};

export default LogoutPage;
