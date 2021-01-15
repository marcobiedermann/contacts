import React, { FC } from 'react';

export interface EmailProps {
  value: string;
}

const Email: FC<EmailProps> = (props) => {
  const { value } = props;

  return <a href={`mailto:${value}`}>{value}</a>;
};

export default Email;
