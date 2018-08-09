import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addContact } from '../../actions/contacts';
import ContactNew from '../../components/ContactNew';

const NewPage = ({ addContact }) => (
  <div>
    <ContactNew addContact={addContact} />
  </div>
);

NewPage.propTypes = {
  addContact: PropTypes.func,
};

NewPage.defaultProps = {
  addContact: () => {},
};

const mapDispatchToProps = dispatch => bindActionCreators({
  addContact,
}, dispatch);

export default connect(null, mapDispatchToProps)(NewPage);
