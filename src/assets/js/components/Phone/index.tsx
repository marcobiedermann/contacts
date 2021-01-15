import React, { FC } from 'react';

export interface PhoneProps {
  value: string;
}

const Phone: FC<PhoneProps> = (props) => {
  const { value } = props;

  return <a href={`tel:${value}`}>{value}</a>;
};

export default Phone;
