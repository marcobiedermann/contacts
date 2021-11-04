import React from 'react';

export interface FooterProps {
  children: React.ReactNode;
}

function Footer(props: FooterProps): JSX.Element {
  return <footer {...props} />;
}

export default Footer;
