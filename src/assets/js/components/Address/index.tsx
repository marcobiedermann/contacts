import React from 'react';

export interface AddressProps {
  type: string;
  value: {
    city: string;
    country: string;
    street: string;
    zip: string;
  };
}

function Address(props: AddressProps): JSX.Element {
  const { type, value } = props;
  const { city, country, street, zip } = value;

  return (
    <address>
      <div>{type}</div>
      <div>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(street)} ${zip} ${city} ${country}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {street}
          <br />
          {zip} {city}
          <br />
          {country}
        </a>
      </div>
    </address>
  );
}

export default Address;
