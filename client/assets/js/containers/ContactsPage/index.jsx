import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ContactsPage from '../../pages/ContactsPage';

export default compose(
  firestoreConnect(() => ['contacts']),
  connect(state => ({
    contacts: state.firestore.ordered.contacts,
  })),
)(ContactsPage);
