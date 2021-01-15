import React, { FC } from 'react';

export interface AddressProps {
  value: {
    city: string;
    country: string;
    streetAddress: string;
    zipCode: string;
  };
}

const Address: FC<AddressProps> = (props) => {
  const { value } = props;
  const { city, country, streetAddress, zipCode } = value;

  return (
    <address>
      <a
        href={`https://maps.google.com/?q=${encodeURIComponent(streetAddress)} ${zipCode} ${city} ${country}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {streetAddress}
        <br />
        {zipCode} {city}
        <br />
        {country}
      </a>
    </address>
  );
};

export default Address;
