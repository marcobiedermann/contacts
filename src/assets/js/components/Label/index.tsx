import React, { FC } from 'react';
import styles from './style.css';

const Label: FC = (props) => {
  const { htmlFor, ...otherProps } = props;

  return <label className={styles.label} htmlFor={htmlFor} {...otherProps} />;
};

export default Label;
