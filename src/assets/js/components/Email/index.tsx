import React from 'react';

export interface EmailProps {
  type: string;
  value: string;
}

function Email(props: EmailProps): JSX.Element {
  const { type, value } = props;

  return (
    <div>
      <div>{type}</div>
      <div>
        <a href={`mailto:${value}`}>{value}</a>
      </div>
    </div>
  );
}

export default Email;
