import PropTypes from 'prop-types';
import React from 'react';
import Contact from '../../../components/Contact';

const ContactPage = ({ match }) => (
  <div>
    <Contact id={match.params.id} />
  </div>
);

ContactPage.propTypes = {
  match: PropTypes.shape(),
};

ContactPage.defaultProps = {
  match: null,
};

export default ContactPage;
