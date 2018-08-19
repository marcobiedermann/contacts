import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './style.css';

const ContactPreview = ({
  id,
  name,
}) => (
  <div>
    <h2 className={styles.contact__name}>
      <NavLink to={`/contacts/${id}`} className={styles.contact__link} activeClassName="is-active">
        {name.firstName}
        {' '}
        {name.lastName}
      </NavLink>
    </h2>
  </div>
);

ContactPreview.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.shape(),
};

ContactPreview.defaultProps = {
  name: null,
};

export default ContactPreview;
