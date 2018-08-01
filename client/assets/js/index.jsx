import React from 'react';
import { render } from 'react-dom';
import Contacts from './components/Contacts';

const contacts = [
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
];

render(<Contacts contacts={contacts} />, document.getElementById('root'));
