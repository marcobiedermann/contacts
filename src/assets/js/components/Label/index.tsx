/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { FC, LabelHTMLAttributes } from 'react';
import styles from './style.module.css';

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

const Label: FC<LabelProps> = (props) => <label className={styles.label} {...props} />;

export default Label;
