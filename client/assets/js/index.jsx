import React from 'react';
import { render } from 'react-dom';
import Contacts from './components/Contacts';

const contacts = [
  {},
  {},
  {},
];

render(<Contacts contacts={contacts} />, document.getElementById('root'));
