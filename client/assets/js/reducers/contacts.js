import deepmerge from 'deepmerge';
import uuidv4 from 'uuid/v4';
import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  UPDATE_CONTACT,
} from '../constants/contacts';
import contactsData from '../data/contacts.json';

const initialState = contactsData;

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT: {
      const contact = {
        ...action.props,
        id: uuidv4(),
      };

      return [
        ...state,
        contact,
      ];
    }

    case REMOVE_CONTACT: {
      return state.filter(contact => contact.id !== action.id);
    }

    case UPDATE_CONTACT: {
      return state.map(
        c => (c.id === action.id ? deepmerge(c, action.props) : c),
      );
    }

    default: {
      return state;
    }
  }
};

export default contacts;
