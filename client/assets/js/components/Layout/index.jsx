import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Main from '../Main';
import Navigation from '../Navigation';
import './style.css';

const Layout = ({ children }) => (
  <div className="layout">
    <Header>
      <Grid>
        <Navigation />
      </Grid>
    </Header>
    <Main>
      <Grid>
        {children}
      </Grid>
    </Main>
    <Footer>
      <Grid>
        Footer
      </Grid>
    </Footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
