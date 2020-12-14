import React, { FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeContact, updateContact } from '../../actions/contacts';
import ContactEdit from '../../components/ContactEdit';

const ContactEditPage: FC = (props) => {
  const { contact, removeContact, updateContact } = props;

  return <ContactEdit {...contact} removeContact={removeContact} updateContact={updateContact} />;
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      removeContact,
      updateContact,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(ContactEditPage);
