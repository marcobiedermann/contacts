import React, { FC } from 'react';
import { CONTACTS, CONTACT_NEW, LOGIN, LOGOUT, REGISTER, SETTINGS } from '../../constants/routes';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Main from '../Main';
import Navigation from '../Navigation';
import styles from './style.module.css';

const Layout: FC = (props) => {
  const { children } = props;

  return (
    <div className={styles.layout}>
      <Header>
        <Grid>
          <Navigation inline routes={[CONTACTS, CONTACT_NEW, SETTINGS, LOGIN, LOGOUT, REGISTER]} />
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
};

export default Layout;
