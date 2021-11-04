import React from 'react';
import styles from './style.module.css';

export interface MainProps {
  children: React.ReactNode;
}

function Main(props: MainProps): JSX.Element {
  return <main className={styles.main} {...props} />;
}

export default Main;
