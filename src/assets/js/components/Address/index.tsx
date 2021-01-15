import React, { FC } from 'react';

export interface AddressProps {
  city: string;
  country: string;
  streetAddress: string;
  zipCode: string;
}

const Address: FC<AddressProps> = (props) => {
  const { city, country, streetAddress, zipCode } = props;

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
