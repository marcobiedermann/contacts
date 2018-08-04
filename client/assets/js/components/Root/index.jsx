import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import Router from '../Router';
import contacts from '../../data/contacts.json';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts,
    };

    this.removeContact = this.removeContact.bind(this);
  }

  addContact(props) {
    const contact = {
      ...props,
      id: uuidv4(),
    };

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        contact,
      ],
    }));
  }

  removeContact(id) {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  }

  render() {
    const { contacts } = this.state;

    return (
      <Router contacts={contacts} removeContact={this.removeContact} />
    );
  }
}

export default Root;
