import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import LoginPage from '../../pages/LoginPage';

export default compose(firestoreConnect(() => ['contacts']))(LoginPage);
