import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addContact } from '../../actions/contacts';
import ContactNew from '../../components/ContactNew';

const ContactNewPage = props => {
  const { addContact } = props;

  return (
    <div>
      <ContactNew addContact={addContact} />
    </div>
  );
};

ContactNewPage.propTypes = {
  addContact: PropTypes.func,
};

ContactNewPage.defaultProps = {
  addContact: () => {},
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addContact,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(ContactNewPage);
