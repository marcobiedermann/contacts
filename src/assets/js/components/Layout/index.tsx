import React from 'react';
import { CONTACTS, CONTACT_NEW, LOGIN, LOGOUT, SETTINGS } from '../../constants/routes';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Main from '../Main';
import Navigation from '../Navigation';
import styles from './style.module.css';

export interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps): JSX.Element {
  const { children } = props;

  return (
    <div className={styles.layout}>
      <Header>
        <Grid>
          <Navigation inline routes={[CONTACTS, CONTACT_NEW, SETTINGS, LOGIN, LOGOUT]} />
        </Grid>
      </Header>
      <Main>
        <Grid>{children}</Grid>
      </Main>
      <Footer>
        <Grid>Footer</Grid>
      </Footer>
    </div>
  );
}

export default Layout;
