import React, { Component } from 'react';
import Router from '../Router';
import contacts from '../../data/contacts.json';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts,
    };
  }

  render() {
    const { contacts } = this.state;

    return (
      <Router contacts={contacts} />
    );
  }
}

export default Root;
