import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ContactPage from '../../pages/ContactPage';

export default compose(
  firestoreConnect(props => {
    const { contactId } = props;

    return [`contacts/${contactId}`];
  }),
  connect((state, props) => {
    const { firestore } = state;
    const { contactId } = props;

    return {
      contact: firestore.data.contacts && firestore.data.contacts[contactId],
    };
  }),
)(ContactPage);
