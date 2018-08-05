import deepmerge from 'deepmerge';
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

    this.addContact = this.addContact.bind(this);
    this.updateContact = this.updateContact.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }

  addContact(props) {
    const contact = {
      ...props,
      id: uuidv4(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  }

  updateContact(id, props) {
    this.setState(prevState => ({
      contacts: prevState.contacts.map(
        c => (c.id === id ? deepmerge(c, props) : c),
      ),
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
      <Router
        contacts={contacts}
        addContact={this.addContact}
        updateContact={this.updateContact}
        removeContact={this.removeContact}
      />
    );
  }
}

export default Root;
