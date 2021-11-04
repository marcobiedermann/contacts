import React from 'react';
import styles from './style.module.css';

export interface GridProps {
  children: React.ReactNode;
}

function Grid(props: GridProps): JSX.Element {
  return <div className={styles.grid} {...props} />;
}

export default Grid;
