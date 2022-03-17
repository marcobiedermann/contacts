import React, { ReactNode } from 'react';
import styles from './style.module.css';

export interface ErrorProps {
  children?: ReactNode;
}

function Error(props: ErrorProps): JSX.Element {
  return <div className={styles.error} {...props} />;
}

export default Error;
