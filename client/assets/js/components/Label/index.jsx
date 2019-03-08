import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.css';

const Label = props => {
  const { children, htmlFor, ...otherProps } = props;

  return (
    <label className={styles.label} htmlFor={htmlFor} {...otherProps}>
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string.isRequired,
};

Label.defaultProps = {
  children: null,
};

export default Label;
