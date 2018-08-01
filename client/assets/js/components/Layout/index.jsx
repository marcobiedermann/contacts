import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

const Layout = ({ children }) => (
  <div className="layout">
    <Header>
      Header
    </Header>
    <Main>
      {children}
    </Main>
    <Footer>
      Footer
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
