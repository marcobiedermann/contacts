/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import styles from './style.module.css';

export interface LabelProps {
  children: React.ReactNode;
  htmlFor: string;
}

function Label(props: LabelProps): JSX.Element {
  return <label className={styles.label} {...props} />;
}

export default Label;
