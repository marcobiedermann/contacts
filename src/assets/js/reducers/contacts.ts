import deepmerge from 'deepmerge';
import { v4 as uuidv4 } from 'uuid';
import { ADD_CONTACT, REMOVE_CONTACT, UPDATE_CONTACT } from '../constants/action-types';

const initialState = [];

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT: {
      const contact = {
        ...action.props,
        id: uuidv4(),
      };

      return [...state, contact];
    }

    case REMOVE_CONTACT: {
      return state.filter((contact) => contact.id !== action.id);
    }

    case UPDATE_CONTACT: {
      return state.map((c) => (c.id === action.id ? deepmerge(c, action.props) : c));
    }

    default: {
      return state;
    }
  }
};

export default contacts;
