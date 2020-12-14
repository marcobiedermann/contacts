import React, { FC } from 'react';
import styles from './style.css';

const Grid: FC = (props) => {
  return <div className={styles.grid} {...props} />;
};

export default Grid;
