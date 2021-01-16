import React, { FC } from 'react';

export interface EmailProps {
  type: string;
  value: string;
}

const Email: FC<EmailProps> = (props) => {
  const { type, value } = props;

  return (
    <div>
      <div>{type}</div>
      <div>
        <a href={`mailto:${value}`}>{value}</a>
      </div>
    </div>
  );
};

export default Email;
