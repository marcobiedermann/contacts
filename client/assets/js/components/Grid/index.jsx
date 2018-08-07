import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const Grid = ({ children }) => (
  <div className="grid">
    {children}
  </div>
);

Grid.propTypes = {
  children: PropTypes.node,
};

Grid.defaultProps = {
  children: null,
};

export default Grid;
