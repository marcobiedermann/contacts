import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ContactEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      firstName: props.name.firstName,
      lastName: props.name.lastName,
      streetAddress: props.address.streetAddress,
      zipCode: props.address.zipCode,
      city: props.address.city,
      country: props.address.country,
      email: props.email,
      phone: props.phone,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const {
      updateContact,
      history,
    } = this.props;
    const {
      id,
      firstName,
      lastName,
      streetAddress,
      zipCode,
      city,
      country,
      email,
      phone,
    } = this.state;

    const contact = {
      name: {
        firstName,
        lastName,
      },
      address: {
        streetAddress,
        zipCode,
        city,
        country,
      },
      email,
      phone,
    };

    updateContact(id, contact);
    history.push('/contacts');
  }

  onInput(event) {
    const {
      name,
      value,
    } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      firstName,
      lastName,
      streetAddress,
      zipCode,
      city,
      country,
      email,
      phone,
    } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="firstName">
            Firstname
            <input
              type="text"
              id="firstName"
              name="firstName"
              defaultValue={firstName}
              onInput={this.onInput}
            />
          </label>
        </div>

        <div>
          <label htmlFor="lastName">
            Lastname
            <input
              type="text"
              id="lastName"
              name="lastName"
              defaultValue={lastName}
              onInput={this.onInput}
            />
          </label>
        </div>

        <div>
          <label htmlFor="streetAddress">
            Street
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              defaultValue={streetAddress}
              onInput={this.onInput}
            />
          </label>
        </div>

        <div>
          <label htmlFor="zipCode">
            Zip
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              defaultValue={zipCode}
              onInput={this.onInput}
            />
          </label>
        </div>

        <div>
          <label htmlFor="city">
            City
            <input
              type="text"
              id="city"
              name="city"
              defaultValue={city}
              onInput={this.onInput}
            />
          </label>
        </div>

        <div>
          <label htmlFor="country">
            Country
            <input
              type="text"
              id="country"
              name="country"
              defaultValue={country}
              onInput={this.onInput}
            />
          </label>
        </div>

        <div>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={email}
              onInput={this.onInput}
            />
          </label>
        </div>

        <div>
          <label htmlFor="phone">
            Phone
            <input
              type="tel"
              id="phone"
              name="phone"
              defaultValue={phone}
              onInput={this.onInput}
            />
          </label>
        </div>

        <div>
          <input
            type="submit"
            defaultValue="Save new contact"
          />
        </div>
      </form>
    );
  }
}

ContactEdit.propTypes = {
  id: PropTypes.string.isRequired,
  address: PropTypes.shape(),
  email: PropTypes.string,
  history: PropTypes.shape(),
  name: PropTypes.shape(),
  phone: PropTypes.string,
  updateContact: PropTypes.func,
};

ContactEdit.defaultProps = {
  address: null,
  email: '',
  history: null,
  name: null,
  phone: '',
  updateContact: () => {},
};

export default withRouter(ContactEdit);
