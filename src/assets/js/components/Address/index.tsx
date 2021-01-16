import React, { FC } from 'react';

export interface AddressProps {
  type: string;
  value: {
    city: string;
    country: string;
    street: string;
    zip: string;
  };
}

const Address: FC<AddressProps> = (props) => {
  const { value } = props;
  const { city, country, street, zip } = value;

  return (
    <address>
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
    </address>
  );
};

export default Address;
