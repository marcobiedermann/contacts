import React, { FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addContact } from '../../actions/contacts';
import ContactNew from '../../components/ContactNew';

const ContactNewPage: FC = (props) => {
  const { addContact } = props;

  return (
    <div>
      <ContactNew addContact={addContact} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addContact,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(ContactNewPage);
