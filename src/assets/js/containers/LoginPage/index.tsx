import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import { compose } from 'redux';
import LoginPage from '../../pages/LoginPage';

export default compose(
  withFirebase,
  connect(({ firebase: { auth } }) => ({ auth })),
)(LoginPage);
