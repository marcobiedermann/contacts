import { withFirebase } from 'react-redux-firebase';
import { compose } from 'redux';
import LogoutPage from '../../pages/LogoutPage';

export default compose(withFirebase)(LogoutPage);
