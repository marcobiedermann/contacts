import React from 'react';
import styles from './style.module.css';

export interface ErrorProps {
  children?: React.ReactNode;
}

function Error(props: ErrorProps): JSX.Element {
  return <div className={styles.error} {...props} />;
}

export default Error;
