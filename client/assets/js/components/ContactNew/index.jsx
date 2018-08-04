import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="firstName">
            Firstname
            <input
              type="text"
              id="firstName"
              name="firstName"
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
              onInput={this.onInput}
            />
          </label>
        </div>

        <div>
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
