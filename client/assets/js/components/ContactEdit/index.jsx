import PropTypes from 'prop-types';
import React from 'react';

const ContactEdit = ({
  address,
  email,
  name,
  phone,
}) => (
  <form action="">
    <div>
      <label htmlFor="firstname">
        Firstname
        <input type="text" id="firstname" name="firstname" defaultValue={name.firstName} />
      </label>
    </div>

    <div>
      <label htmlFor="lastname">
        Lastname
        <input type="text" id="lastname" name="lastname" defaultValue={name.lastName} />
      </label>
    </div>

    <div>
      <label htmlFor="street">
        Street
        <input type="text" id="street" name="street" defaultValue={address.streetAddress} />
      </label>
    </div>

    <div>
      <label htmlFor="zip">
        Zip
        <input type="text" id="zip" name="zip" defaultValue={address.zipCode} />
      </label>
    </div>

    <div>
      <label htmlFor="city">
        City
        <input type="text" id="city" name="city" defaultValue={address.city} />
      </label>
    </div>

    <div>
      <label htmlFor="country">
        Country
        <input type="text" id="country" name="country" defaultValue={address.country} />
      </label>
    </div>

    <div>
      <label htmlFor="email">
        Email
        <input type="email" id="email" name="email" defaultValue={email} />
      </label>
    </div>

    <div>
      <label htmlFor="phone">
        Phone
        <input type="tel" id="phone" name="phone" defaultValue={phone} />
      </label>
    </div>

    <div>
      <input type="submit" defaultValue="Save new contact" />
    </div>
  </form>
);

ContactEdit.propTypes = {
  address: PropTypes.shape(),
  email: PropTypes.string,
  name: PropTypes.shape(),
  phone: PropTypes.string,
};

ContactEdit.defaultProps = {
  address: null,
  email: '',
  name: null,
  phone: '',
};

export default ContactEdit;
