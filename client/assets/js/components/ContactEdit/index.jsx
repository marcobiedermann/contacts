import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './style.css';

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
    history.push(`/contacts/${id}`);
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
      <form onSubmit={this.onSubmit} className="form">
        <div className="form__field">
          <label
            htmlFor="firstName"
            className="form__label"
          >
            Firstname
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form__input"
            defaultValue={firstName}
            onInput={this.onInput}
          />
        </div>

        <div className="form__field">
          <label
            htmlFor="lastName"
            className="form__label"
          >
            Lastname
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form__input"
            defaultValue={lastName}
            onInput={this.onInput}
          />
        </div>

        <div className="form__field">
          <label
            htmlFor="streetAddress"
            className="form__label"
          >
            Street
          </label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            className="form__input"
            defaultValue={streetAddress}
            onInput={this.onInput}
          />
        </div>

        <div className="form__field">
          <label
            htmlFor="zipCode"
            className="form__label"
          >
            Zip
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            className="form__input"
            defaultValue={zipCode}
            onInput={this.onInput}
          />
        </div>

        <div className="form__field">
          <label
            htmlFor="city"
            className="form__label"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="form__input"
            defaultValue={city}
            onInput={this.onInput}
          />
        </div>

        <div className="form__field">
          <label
            htmlFor="country"
            className="form__label"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className="form__input"
            defaultValue={country}
            onInput={this.onInput}
          />
        </div>

        <div className="form__field">
          <label
            htmlFor="email"
            className="form__label"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form__input"
            defaultValue={email}
            onInput={this.onInput}
          />
        </div>

        <div className="form__field">
          <label
            htmlFor="phone"
            className="form__label"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form__input"
            defaultValue={phone}
            onInput={this.onInput}
          />
        </div>

        <div className="form__field">
          <input
            type="submit"
            defaultValue="Done"
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
