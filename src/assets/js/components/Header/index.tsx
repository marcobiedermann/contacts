import React from 'react';
import styles from './style.module.css';

export interface HeaderProps {
  children: React.ReactNode;
}

function Header(props: HeaderProps): JSX.Element {
  return <header className={styles.header} {...props} />;
}

export default Header;
