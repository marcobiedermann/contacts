import React, { FC } from 'react';

const Header: FC = (props) => {
  const { children } = props;

  return <header>{children}</header>;
};

export default Header;
