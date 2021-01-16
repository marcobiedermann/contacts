import React, { FC } from 'react';

export interface PhoneProps {
  type: string;
  value: string;
}

const Phone: FC<PhoneProps> = (props) => {
  const { type, value } = props;

  return (
    <div>
      <div>{type}</div>
      <div>
        <a href={`tel:${value}`}>{value}</a>
      </div>
    </div>
  );
};

export default Phone;
