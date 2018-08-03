import React from 'react';

const ContactNew = () => (
  <form action="">
    <div>
      <label htmlFor="firstname">
        Firstname
        <input type="text" id="firstname" name="firstname" />
      </label>
    </div>

    <div>
      <label htmlFor="lastname">
        Lastname
        <input type="text" id="lastname" name="lastname" />
      </label>
    </div>

    <div>
      <label htmlFor="street">
        Street
        <input type="text" id="street" name="street" />
      </label>
    </div>

    <div>
      <label htmlFor="zip">
        Zip
        <input type="text" id="zip" name="zip" />
      </label>
    </div>

    <div>
      <label htmlFor="city">
        City
        <input type="text" id="city" name="city" />
      </label>
    </div>

    <div>
      <label htmlFor="country">
        Country
        <input type="text" id="country" name="country" />
      </label>
    </div>

    <div>
      <label htmlFor="email">
        Email
        <input type="email" id="email" name="email" />
      </label>
    </div>

    <div>
      <label htmlFor="phone">
        Phone
        <input type="tel" id="phone" name="phone" />
      </label>
    </div>

    <div>
      <input type="submit" value="Save new contact" />
    </div>
  </form>
);

export default ContactNew;
