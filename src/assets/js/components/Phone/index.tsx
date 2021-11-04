import React from 'react';

export interface PhoneProps {
  type: string;
  value: string;
}

function Phone(props: PhoneProps): JSX.Element {
  const { type, value } = props;

  return (
    <div>
      <div>{type}</div>
      <div>
        <a href={`tel:${value}`}>{value}</a>
      </div>
    </div>
  );
}

export default Phone;
