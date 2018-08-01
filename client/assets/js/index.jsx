import React from 'react';
import { render } from 'react-dom';
import uuidv4 from 'uuid/v4';
import Contacts from './components/Contacts';

const contacts = [
  {
    id: uuidv4(),
  },
  {
    id: uuidv4(),
  },
  {
    id: uuidv4(),
  },
];

render(<Contacts contacts={contacts} />, document.getElementById('root'));
