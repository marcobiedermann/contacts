import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './style.css';

class ContactNew extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const {
      addContact,
      history,
    } = this.props;
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

    addContact(contact);
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
            className="form__field"
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
            className="form__field"
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
            className="form__field"
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
            className="form__field"
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
            className="form__field"
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
            className="form__field"
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
            className="form__field"
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
            className="form__field"
            onInput={this.onInput}
          />
        </div>

        <div className="form__field">
          <input
            type="submit"
            value="Save new contact"
          />
        </div>
      </form>
    );
  }
}

ContactNew.propTypes = {
  addContact: PropTypes.func,
  history: PropTypes.shape(),
};

ContactNew.defaultProps = {
  addContact: () => {},
  history: null,
};

export default withRouter(ContactNew);
